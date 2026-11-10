# Ringer

Ringer runs manifest tasks in parallel across cheap CLI workers (Codex, OpenCode). It verifies
every task by **executing a check command**. Exit 0 is the only PASS. A failed task gets one
retry, and the retry prompt includes the real failure output of the check. Runs stream to
Ringside, a local dashboard page. The orchestrating model pays tokens for specs, routing and
review. The workers do the typing.

`ringer.py` is a single-file stdlib CLI (~11k lines). There is no build step and no dependency
install: `./ringer.py` runs from a fresh clone.

## Orchestration rules live in the skill, not here

Read the playbook at `.claude/skills/ringer/SKILL.md` before you write a manifest, choose a swarm
pattern, pick an engine or diagnose a failed worker. `./ringer.py install-agent` installs it to
`~/.claude/skills/ringer/`. The playbook holds the spec-writing craft, the check-writing rules,
the pattern catalog and the engine-selection procedure. Do not re-derive them.

The short version: **a single task is a one-task manifest**, and anything that calls a model runs
under Ringer so it is visible, verified and logged.

## Commands

```bash
./ringer.py --help                        # every command (no `help` subcommand)
./ringer.py lint manifest.json            # always lint before running
./ringer.py run manifest.json --identity <who-you-are>
./ringer.py run manifest.json --dry-run   # print the plan, spawn nothing
./ringer.py ask "<question>" --source /abs/path   # bounded read-only question, one clean worker
./ringer.py hud                           # Ringside at http://127.0.0.1:8700 (idempotent)
./ringer.py models                        # per-model scoreboard from executed-check outcomes
./ringer.py models --open                 # render the scoreboard as HTML, zero tokens
./ringer.py catalog --refresh             # refresh the local OpenRouter model snapshot
./ringer.py demo                          # 3-task smoke test in /tmp
./ringer.py install-agent                 # (re)install the skill + hooks into ~/.claude
```

Tests are stdlib `unittest` and must run **from the `tests/` directory**. You cannot import the
suite from the repo root:

```bash
cd tests && python3 -m unittest discover -s . -p 'test_*.py'   # 266 tests, ~35s
cd tests && python3 -m unittest test_ringer                    # one module
```

The Python floor is 3.12. The README states it, and CI only ever ran 3.12.

## Layout

| Path | What it is |
|---|---|
| `ringer.py` | the whole CLI: run loop, checks, retries, eval log, dashboard server |
| `templates/` | manifest kits (bakeoff, fix-swarm, review-swarm, focus-group, probe, …) with their own checks |
| `registry/model-identity.toml` | maps (engine, manifest `model` slug) → display name, lab, harness, access |
| `registry/model-capabilities/` | per-model capability files (caching, tool calling, reasoning, limits) |
| `engines/` | worker launchers, incl. `opencode-sandboxed.sh` (macOS Seatbelt profile) |
| `hooks/ringer_nudge.py` | the PreToolUse/PostToolUse hooks that nudge swarm-shaped work back into Ringer |
| `hud/`, `dashboard/` | Ringside frontend and the served dashboard |
| `docs/` | reference docs. `TAXONOMY.md` holds the model-identity procedure |
| `tests/` | colocated unittest suite + fixtures |

## Machine-local state (not in the repo)

- `~/.config/ringer/config.toml` — engines, `allow_full_access`, eval backend, artifact paths.
- `~/.ringer/` — run state (`runs/`), artifacts, `runs.jsonl` (the eval log that the scoreboard
  reads), `ringer.db`, `openrouter-catalog.json`.
- `docs/MODEL-NOTES.md` — **untracked on this machine by design** (see `.git/info/exclude`).
  - It is a personal evidence log. Upstream ships a different, shared file at the same path.
  - Backups of earlier versions live in `~/.ringer/MODEL-NOTES.*.md`.
  - Keep appending dated entries after runs. The post-run ritual in the playbook depends on it.

## Engine gotchas measured on this machine

- **Refresh the OpenCode model list before auditioning a new OpenRouter slug.**
  - OpenCode rejects any model that is missing from its cached models.dev list. It fails with
    `Unexpected server error` after ~3s and rc=1, which looks exactly like a model failure in the
    scoreboard. Run `opencode models openrouter --refresh` first.
  - The sandbox wrapper gives each worker an empty `XDG_CACHE_HOME`. So
    `engines/opencode-sandboxed.sh` copies `~/.cache/opencode/models.json` into it. Without that
    copy, the refresh never reaches a sandboxed worker (found 2026-11-10).
- **Keep OpenCode lanes at `max_parallel` 1–2.** Concurrent OpenCode workers collide on
  `~/.local/share/opencode/opencode.db` (`database is locked`, instant rc=1). Seen at 8 parallel and
  at 2, with a 352 MB db.
- **Reasoning-capable models can spend their whole output budget thinking.** GLM 5.3 twice hit
  `finish reason: length` with 32000 reasoning tokens and zero tool calls. Set reasoning effort per
  task with `engine_args: ["--variant", "low"]` (opencode) or `["-c", "model_reasoning_effort=…"]`
  (codex).
- **Codex needs `{model_args}` in its `args_template`.** Without it, the `model` field of the
  manifest never reaches the CLI, and the scoreboard credits the wrong model.
- Harness failures are not model failures. When an infrastructure error burns an attempt, say so in
  MODEL-NOTES so the next orchestrator discounts those scoreboard rows.

## Repo conventions

- **README `## Contributors` must credit every commit author with merged work.**
  `tests/test_contributors.py` enforces it and fails the suite otherwise.
- `tests/test_ringer.py::test_second_signal_during_shutdown_does_not_cancel_cleanup` fails on
  Python 3.13 with an asyncio `Event loop is closed` message at interpreter exit. It fails the same
  way on pristine upstream. It is a known environmental flake, not a regression.
- Changes to `ringer.py` must preserve four load-bearing invariants: stdin closed (`< /dev/null`),
  sandbox mode always explicit, verification executes the artifact, and logs carry raw worker output
  only.
- To add a model to the scoreboard taxonomy, add one entry in `registry/model-identity.toml`.
  Follow `docs/TAXONOMY.md`. Unregistered slugs show as `[unregistered]` with a guessed lab.

## Remotes and updating

- `origin` → `delisma/ringer` (your fork). `upstream` → `NateBJones-Projects/ringer`.
- `./ringer.py self-update` fetches **`origin/main`** and applies only a clean fast-forward on
  `main`. Sync the fork from upstream first, or the update finds nothing.
- `self-update` does **not** refresh the installed skill. Run `./ringer.py install-agent` after an
  update that touched `.claude/skills/ringer/SKILL.md`.

## History note

This checkout once held the Astryx design-system history merged into `main`: 2,222 extra commits,
3,449 extra files, and 13 inherited GitHub workflows. One of those workflows was a branch pruner
that targeted `facebook/astryx` but deleted branches from `origin`.

- We removed that history on 2026-09-21. `main` is now the upstream lineage plus the commits of
  this fork.
- The old history survives locally as the tag `archive/astryx-merged-2026-09-21` and the
  `*-astryx` branches. Astryx code lives in `delisma/astryx`.
- A file here that references Astryx, pnpm workspaces, Storybook or StyleX is a leftover. This
  repo is Ringer only.
