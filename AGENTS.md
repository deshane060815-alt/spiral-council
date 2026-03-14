# AGENTS.md

Guidance for coding agents working in this repository.

## Project overview

- Framework: Next.js 16 (App Router) with TypeScript.
- Package manager: npm (`package-lock.json` is committed).
- Main app code lives in `src/app`.

## Setup and run

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open: `http://localhost:3000`

## Validation checklist

Use the smallest useful checks for your change:

- Lint: `npm run lint`
- Production build: `npm run build`
- Combined check: `npm test` (runs build + lint)

If you touch UI behavior or styles, also do a quick manual browser check of the affected page(s).

## Agent workflow

1. Read the request carefully and inspect relevant files before editing.
2. Keep changes tightly scoped to the request.
3. Prefer minimal, targeted diffs over broad refactors.
4. Run the smallest useful validation command(s) for the change.
5. Summarize what changed and how it was validated.

## Coding conventions

- Keep changes scoped to the user request; avoid broad refactors.
- Follow existing App Router patterns in `src/app`.
- Prefer simple, readable React components and clear TypeScript types.
- Do not update `package-lock.json` unless dependencies actually changed.
- Do not add new dependencies unless required for the request.
- Avoid renaming/moving files unless the request requires it.

## Git and safety

- Do not revert or overwrite unrelated local changes.
- Stage only files relevant to the request.
- Use descriptive commit messages that explain intent.

## Cursor Cloud specific instructions

- Before editing, inspect existing files to match local style and patterns.
- For non-trivial code changes, run at least one relevant validation command from the checklist.
- For UI changes, verify in-browser and capture artifacts (screenshot/video) when requested.
- Leave dev services running after testing unless cleanup is explicitly requested.
