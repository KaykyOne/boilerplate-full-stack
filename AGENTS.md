# Agent Instructions

## Mandatory startup procedure

Before inspecting, creating, modifying, refactoring or deleting application code, you MUST:

1. Read every skill located under:

   `.agents/skills/**/SKILL.md`

2. Follow every applicable rule found in those skills.

3. Read ALL project context files from BOTH:

   `frontend/.agents/context/**/*.md`

   `api/.agents/context/**/*.md`

4. Only after completing the steps above may you inspect or modify application code.

This startup procedure is mandatory for EVERY coding task, regardless of whether the requested change affects only frontend, only API, or both.

Do not skip the procedure because the task appears small.

## Context writing

After completing modifications:

- If only `frontend/` was modified, create context only in `frontend/.agents/context/`.
- If only `api/` was modified, create context only in `api/.agents/context/`.
- If both were modified, create one separate context file in each project.

A coding task is not complete until the required context file or files have been created.

## Priority

If instructions conflict:

1. Explicit user instruction
2. Closest applicable `AGENTS.md`
3. Repository `AGENTS.md`
4. Skills
5. Existing project conventions