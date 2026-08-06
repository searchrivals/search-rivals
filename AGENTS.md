# AGENTS.md

## Project

Search Rivals is a Next.js 16, React 19, TypeScript, Tailwind CSS 3, Framer Motion, and Sanity project.

The goal is to build a stable, premium performance marketing website and validation platform for Search Rivals.

## Package Management

- Use pnpm only.
- Do not use npm install, yarn, or bun.
- Do not create or restore package-lock.json.
- Keep pnpm-lock.yaml as the only lockfile.
- Do not upgrade major dependencies without explicit approval.
- Keep Tailwind CSS on version 3 unless explicitly told otherwise.

## Git Rules

- Never work directly on main.
- Create a focused branch before making changes.
- Use small, purpose-specific commits.
- Do not push without approval.
- Do not merge without approval.
- Always show the final diff before committing.
- Do not include secrets, environment files, personal files, screenshots, recordings, or temporary files in commits.

## Environment Variables

- Never expose .env.local values.
- Never commit .env.local.
- Keep .env.example safe and free of real secrets.
- Use existing environment variable names unless a change is explicitly requested.

## Validation Commands

Before completing implementation work, run:

- pnpm lint
- pnpm typecheck
- pnpm build
- git diff --check

If any command fails, report the failure and do not claim the task is complete.

## Next.js And React Rules

- Prefer Server Components by default.
- Use Client Components only when state, effects, browser APIs, event handlers, or Framer Motion require them.
- Do not introduce broad TypeScript suppressions.
- Do not introduce broad ESLint suppressions.
- Do not hide build errors.
- Preserve Next.js 16 conventions, including proxy.ts where applicable.

## Design And Copy Rules

- Do not perform broad redesigns unless explicitly requested.
- Do not rewrite approved positioning or copy unless explicitly requested.
- Preserve the existing visual direction unless the task is specifically about design.
- Keep sections mobile-first and responsive.
- Avoid unnecessary animation changes.
- Keep homepage changes focused and reviewable.

## Security And Privacy

- Do not commit credentials, API keys, tokens, private URLs, client data, or personal information.
- Do not print environment values in logs.
- Do not add third-party tracking or analytics scripts without explicit approval.

## Current Known Issues

These are known and should be handled in separate focused branches:

- The final homepage section appears duplicated.
- The footer extends beyond the right side of the viewport.
- Some ESLint warnings remain but are not current blockers.
- Duplicate or stale Vercel projects may show failed checks even when the active Search Rivals deployment succeeds.

## Workflow

For each task:

1. Confirm the branch.
2. Inspect the relevant files.
3. Make the smallest safe change.
4. Run validation.
5. Show the diff.
6. Commit only after approval.
7. Push only after approval.
