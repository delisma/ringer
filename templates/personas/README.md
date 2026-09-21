# personas

Spec-ready persona blocks for panel runs — `focus-group`, `adversarial-review`, `review-swarm`.

## Why these are text, not skills

A Ringer worker runs with its cwd in a task directory outside any repository. Measured on
2026-09-21 (`ringer-skill-scope-probe`, one Codex task): a marker skill planted in both
`<repo>/.claude/skills` and `<repo>/.agents/skills` was **invisible** to the worker, while a skill
installed globally at `~/.agents/skills` appeared in the worker's own listing. See the entry in
`docs/MODEL-NOTES.md`.

So a project-scoped persona skill cannot reach a worker. The manifest spec is the one channel a
stateless worker is guaranteed to read — which is why these are blocks of text you paste into a
spec, not skills you install.

The other half of that finding: a **globally** installed skill binds to every worker whether the
spec asks for it or not. If a run needs one persona to write differently from the rest, that
difference belongs in the spec, not in a global skill.

## bmad/

Generated from a BMAD-METHOD install by `scripts/bmad-personas.py`. Five expert roles: Mary
(business analyst), John (product manager), Winston (system architect), Amelia (senior software
engineer), Sally (UX designer).

```bash
npx bmad-method install --directory ~/bmad --modules bmm --tools claude-code --yes
python3 scripts/bmad-personas.py --bmad-dir ~/bmad            # regenerate
python3 scripts/bmad-personas.py --bmad-dir ~/bmad --check     # exits 1 when stale
```

Install BMAD **outside** this repo. Its installer writes ~29 skills into the project you point it
at, none of which a worker can see anyway.

## Using a persona

1. Copy the block inside the `text` fence from one persona file.
2. Paste it into one task's `spec` — `REVIEW_FOCUS` for the review kits, `PERSONA` for
   `focus-group`.
3. **One persona per task.** Personas in a shared context bleed into each other.
4. Keep the panel fixed across rounds. A stable panel is what makes a before/after comparison mean
   anything.
5. Give the task a real check. A persona's reaction is prose, so check structure and evidence —
   required headings, PASS/FAIL/MIXED per criterion, quotes that appear in the source — and never
   `test -f report.md` alone.

The persona shapes judgement, not honesty: keep the "say UNVERIFIABLE when the material does not
let you decide" line, or a persona with an opinion will invent findings to fill a section.
