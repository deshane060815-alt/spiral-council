# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16** application (React 19, TypeScript, Tailwind CSS v4) called **spiral-council**. It uses npm as the package manager (`package-lock.json`).

### Available scripts

See `package.json` for the full list. Key commands:

- `npm run dev` — starts the Next.js dev server on port 3000
- `npm run build` — production build
- `npm run lint` — runs ESLint
- `npm run start` — serves the production build

### Notes

- There are no external services, databases, or environment variables required.
- The `/r1` route referenced in `src/app/page.tsx` does not have a page component yet (returns 404).
- The CI workflow (`.github/workflows/npm-publish.yml`) references `npm test`, but no test script is defined in `package.json`. There are currently no automated tests.
- The React Compiler (`babel-plugin-react-compiler`) is enabled via `reactCompiler: true` in `next.config.ts`.
