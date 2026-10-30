#!/usr/bin/env python3
"""MODEL-NOTES draft command behavior."""

from __future__ import annotations

import json
import os
import subprocess
import sys
import tempfile
import unittest
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / "ringer.py"


class LearnCommandTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.temp_path = Path(self.temp.name)
        self.eval_log = self.temp_path / "runs.jsonl"
        self.notes_path = self.temp_path / "MODEL-NOTES.md"
        self.run_id = "learn-fixture-20260908T120000Z-p42"
        self.rows = [
            {
                "run_id": "older-run-20260907T120000Z-p41",
                "task_key": "old",
                "worker_engine": "codex",
                "model": "older-model",
                "task_type": "code-feature",
                "verdict": "PASS",
                "duration_ms": 1000,
                "worker_tokens": 1000,
                "retry": False,
                "logged_at": "2026-09-07T12:00:00+00:00",
            },
            {
                "run_id": self.run_id,
                "task_key": "alpha-retried",
                "worker_engine": "codex",
                "model": "vendor/model-alpha",
                "reasoning_effort": "high",
                "task_type": "persona-review",
                "verdict": "FAIL",
                "duration_ms": 1000,
                "worker_tokens": 1200,
                "retry": False,
                "logged_at": "2026-09-08T12:00:00+00:00",
            },
            {
                "run_id": self.run_id,
                "task_key": "alpha-retried",
                "worker_engine": "codex",
                "model": "vendor/model-alpha",
                "reasoning_effort": "high",
                "task_type": "persona-review",
                "verdict": "PASS",
                "duration_ms": 2000,
                "worker_tokens": 1800,
                "retry": True,
                "logged_at": "2026-09-08T12:01:00+00:00",
            },
            {
                "run_id": self.run_id,
                "task_key": "alpha-direct",
                "worker_engine": "codex",
                "model": "vendor/model-alpha",
                "reasoning_effort": "high",
                "task_type": "persona-review",
                "verdict": "PASS",
                "duration_ms": 4000,
                "worker_tokens": 4600,
                "retry": False,
                "logged_at": "2026-09-08T12:02:00+00:00",
            },
            {
                "run_id": self.run_id,
                "task_key": "beta-direct",
                "worker_engine": "opencode",
                "model": "vendor/model-beta",
                "task_type": "persona-review",
                "verdict": "PASS",
                "duration_ms": 85000,
                "worker_tokens": 20000,
                "retry": False,
                "logged_at": "2026-09-08T12:03:00+00:00",
            },
        ]
        self.eval_log.write_text(
            "\n".join(json.dumps(row) for row in self.rows) + "\n",
            encoding="utf-8",
        )
        self.notes_path.write_text(
            "# Model notes\n\n## Model Alpha (`vendor/model-alpha`)\n\n- 2026-09-01 old note.\n",
            encoding="utf-8",
        )

    def run_command(self, *extra: str) -> subprocess.CompletedProcess[str]:
        env = os.environ.copy()
        env["RINGER_NO_SELF_UPDATE"] = "1"
        return subprocess.run(
            [
                sys.executable,
                str(SCRIPT),
                "learn",
                "--log",
                str(self.eval_log),
                "--notes-file",
                str(self.notes_path),
                *extra,
            ],
            cwd=ROOT,
            env=env,
            text=True,
            capture_output=True,
            check=False,
        )

    def test_defaults_to_last_run_and_drafts_real_group_numbers(self) -> None:
        notes_before = self.notes_path.read_bytes()

        result = self.run_command()

        self.assertEqual(0, result.returncode, result.stderr)
        today = datetime.now(timezone.utc).date().isoformat()
        self.assertIn(
            '## existing section: "Model Alpha (`vendor/model-alpha`)"',
            result.stdout,
        )
        self.assertIn(
            f"- {today} persona-review (learn-fixture, 2 tasks, effort=high): "
            "1/2 first-try (+1 on retry). 3k/5k tokens, 3s/4s. "
            "[LESSON: fill in -- the tool cannot infer this from logs alone.]",
            result.stdout,
        )
        self.assertNotIn("2/2 first-try", result.stdout)
        self.assertIn(
            '## NEW SECTION SUGGESTED: "vendor/model-beta (opencode)"',
            result.stdout,
        )
        self.assertIn("vendor/model-alpha", result.stdout)
        self.assertIn("vendor/model-beta", result.stdout)
        self.assertIn("20k tokens, 85s", result.stdout)
        self.assertEqual(2, result.stdout.count("[LESSON:"))
        self.assertEqual(notes_before, self.notes_path.read_bytes())

    def test_writes_requested_output_and_names_path(self) -> None:
        out_path = self.temp_path / "drafts" / "learn.md"

        result = self.run_command(self.run_id, "--out", str(out_path))

        self.assertEqual(0, result.returncode, result.stderr)
        self.assertEqual(f"learn: wrote draft to {out_path}\n", result.stdout)
        self.assertIn("1/2 first-try (+1 on retry)", out_path.read_text(encoding="utf-8"))

    def test_suggested_headers_name_each_model(self) -> None:
        self.notes_path.write_text("# Model notes\n", encoding="utf-8")

        result = self.run_command(self.run_id)

        self.assertEqual(0, result.returncode, result.stderr)
        self.assertIn(
            '## NEW SECTION SUGGESTED: "vendor/model-alpha (codex)"',
            result.stdout,
        )
        self.assertIn(
            '## NEW SECTION SUGGESTED: "vendor/model-beta (opencode)"',
            result.stdout,
        )

    def test_missing_run_id_exits_one(self) -> None:
        result = self.run_command("missing-run")

        self.assertEqual(1, result.returncode)
        self.assertIn("missing-run", result.stderr)
        self.assertIn("was not found", result.stderr)


if __name__ == "__main__":
    unittest.main()
