# AGENTS.md

Operational guide for coding agents working in this repository.

## Project overview

- Framework: Next.js 16 (App Router) with TypeScript.
- Package manager: npm (`package-lock.json` is committed).
- Main app code lives in `src/app`.

## Setup and run

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open: `http://localhost:3000`

## Working style

- Keep changes tightly scoped to the user request.
- Prefer existing patterns over new abstractions.
- Read nearby code before editing so style and conventions stay consistent.
- Avoid broad refactors unless the user explicitly asks for them.

## Coding conventions

- Follow existing App Router patterns in `src/app`.
- Prefer simple, readable React components and clear TypeScript types.
- Do not update `package-lock.json` unless dependencies actually changed.
- Do not add new dependencies unless required for the request.

## Validation checklist

Run the smallest high-signal check(s) for the change:

- Lint: `npm run lint`
- Production build: `npm run build`
- Combined check: `npm test` (runs build + lint)

Guidance:

- Non-trivial code change: run at least one checklist command.
- Behavior-sensitive change: favor `npm test` when practical.
- UI behavior/style changes: do a quick browser verification of affected page(s).

## Git hygiene

- Do not revert unrelated local changes.
- Stage only files relevant to the task.
- Use clear, descriptive commit messages.

## Cursor Cloud specific instructions

- Before editing, inspect existing files to match local style and patterns.
- For non-trivial changes, include command output evidence in your final summary.
- For UI changes, verify in-browser and capture screenshot/video artifacts when requested.
- Leave dev services running after testing unless cleanup is explicitly requested.
