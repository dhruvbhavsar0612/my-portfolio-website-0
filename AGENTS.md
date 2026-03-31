# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15 portfolio website** (single-service, no backend/database). All commands are in `package.json`:

- **Dev server:** `npm run dev` (port 3000)
- **Lint:** `npm run lint`
- **Build:** `npm run build`
- **Clean:** `npm run clean`

No environment variables are required for local development. The `.env.example` references a `GEMINI_API_KEY` but no code in the app uses it.

Both `package-lock.json` (npm) and `pnpm-lock.yaml` exist. CI uses `npm ci` with Node.js 22. Use `npm install` for dependency installation.
