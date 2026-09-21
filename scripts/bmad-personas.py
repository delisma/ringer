#!/usr/bin/env python3
"""Extract BMAD-METHOD agent personas into spec-ready persona blocks.

A Ringer worker runs with its cwd in a task directory outside any repo, so
project-scoped agent skills (which is what `npx bmad-method install` writes)
never reach it. The one channel a stateless worker is guaranteed to read is the
manifest spec. This script turns each BMAD agent into a self-contained block you
paste into a spec.

Usage:
    python3 scripts/bmad-personas.py --bmad-dir ~/bmad
    python3 scripts/bmad-personas.py --bmad-dir ~/bmad --check   # verify files are current

Re-run after a BMAD update; `--check` exits 1 when the committed files no longer
match the install, so it can serve as a manifest check.
"""
import argparse
import pathlib
import re
import sys
import tomllib

OUT_DIR = pathlib.Path(__file__).resolve().parent.parent / "templates" / "personas" / "bmad"
REQUIRED = ("name", "title", "role", "identity", "communication_style")


def overview(skill_md: pathlib.Path) -> str:
    """The prose paragraph under '## Overview' in a BMAD SKILL.md, if present."""
    text = skill_md.read_text(encoding="utf-8")
    m = re.search(r"^## Overview\s*\n+(.+?)(?=\n\s*\n|\n## )", text, re.S | re.M)
    return " ".join(m.group(1).split()) if m else ""


def read_agent(skill_dir: pathlib.Path) -> dict:
    with (skill_dir / "customize.toml").open("rb") as fh:
        agent = tomllib.load(fh).get("agent", {})
    missing = [f for f in REQUIRED if not agent.get(f)]
    if missing:
        raise ValueError(f"{skill_dir.name}: agent block missing {', '.join(missing)}")
    agent["overview"] = overview(skill_dir / "SKILL.md")
    agent["skill"] = skill_dir.name
    return agent


def slug(agent: dict) -> str:
    return re.sub(r"[^a-z0-9]+", "-", agent["title"].lower()).strip("-")


def render(agent: dict, version: str) -> str:
    principles = agent.get("principles") or []
    lines = [
        f"# {agent['name']} — {agent['title']}",
        "",
        f"Source: BMAD-METHOD {version}, skill `{agent['skill']}`. Regenerate with",
        "`python3 scripts/bmad-personas.py --bmad-dir <install>`; do not hand-edit.",
        "",
        "## Persona block (paste into a manifest spec)",
        "",
        "```text",
        f"PERSONA: {opening(agent)}",
        f"Your role on this panel: {sentence(agent['role'])}",
        f"What shapes your judgement: {sentence(agent['identity'])}",
        f"How you write: {sentence(agent['communication_style'])}",
    ]
    if principles:
        lines.append("Principles you hold to, in this order:")
        lines += [f"  {i}. {sentence(p)}" for i, p in enumerate(principles, 1)]
    lines += [
        f"Stay in character as {agent['name']} for the whole task. Judge only what the",
        "review surface actually shows; never invent findings to fill a section, and say",
        "UNVERIFIABLE when the material does not let you decide.",
        "```",
        "",
        "## Where it fits",
        "",
        f"- `adversarial-review` / `review-swarm`: paste as the reviewer's `REVIEW_FOCUS`, one persona per task.",
        f"- `focus-group`: paste as the `PERSONA` card when the panel is expert reviewers rather than end users.",
        "",
    ]
    return "\n".join(lines)


def opening(agent: dict) -> str:
    """One 'You are …' sentence. BMAD overviews already open that way — don't say it twice."""
    overview_text = " ".join((agent.get("overview") or "").split())
    if re.match(rf"^You are {re.escape(agent['name'])}\b", overview_text):
        return sentence(overview_text)
    intro = f"You are {agent['name']}, {article(agent['title'])}."
    return f"{intro} {sentence(overview_text or agent['identity'])}" if overview_text or agent.get("identity") else intro


def article(title: str) -> str:
    return f"{'an' if title[0].lower() in 'aeiou' else 'a'} {title}"


def sentence(text: str) -> str:
    text = " ".join(str(text).split())
    return text if text.endswith((".", "!", "?")) else text + "."


def bmad_version(bmad_dir: pathlib.Path) -> str:
    """The installed version, from the first `version:` key of the install manifest."""
    manifest = bmad_dir / "_bmad" / "_config" / "manifest.yaml"
    if manifest.is_file():
        m = re.search(r"^\s*version:\s*v?(\d+\.\d+\.\d+)", manifest.read_text(encoding="utf-8"), re.M)
        if m:
            return m.group(1)
    return "unknown version"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--bmad-dir", required=True, help="directory a BMAD install wrote .claude/skills into")
    ap.add_argument("--check", action="store_true", help="verify the committed files match the install")
    args = ap.parse_args()

    bmad = pathlib.Path(args.bmad_dir).expanduser()
    skills = sorted((bmad / ".claude" / "skills").glob("bmad-agent-*"))
    if not skills:
        print(f"no bmad-agent-* skills under {bmad}/.claude/skills — is BMAD installed there?", file=sys.stderr)
        return 1
    version = bmad_version(bmad)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    stale = []
    written = []
    for skill_dir in skills:
        agent = read_agent(skill_dir)
        target = OUT_DIR / f"{slug(agent)}.md"
        body = render(agent, version)
        if args.check:
            current = target.read_text(encoding="utf-8") if target.exists() else ""
            if current != body:
                stale.append(target.name if target.exists() else f"{target.name} (missing)")
        else:
            target.write_text(body, encoding="utf-8")
            written.append(f"{agent['name']} — {agent['title']} -> {target.relative_to(OUT_DIR.parent.parent.parent)}")

    if args.check:
        if stale:
            print("FAIL: persona files are out of date with the BMAD install:")
            for s in stale:
                print(" -", s)
            print("Regenerate: python3 scripts/bmad-personas.py --bmad-dir", args.bmad_dir)
            return 1
        print(f"PASS: all {len(skills)} persona files match BMAD {version}")
        return 0

    for line in written:
        print("wrote", line)
    print(f"{len(written)} personas from BMAD {version}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
