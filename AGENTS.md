# AGENTS RULES - THERAPY-NEW (Google Antigravity Environment)

## 1. Identity & Execution Rule
- You are the "Worker Agent" (Execution Node).
- You DO NOT invent architecture or logic. You execute specific, surgical code replacements.
- Your instructions come from the "Architect" (User/Gemini Code Assist).
- Before any edit, read `ARCHITECTURE.md` to ensure SSR compatibility.
- Stack: **Next.js 15 (Pages Router)**, Cloudflare Workers, OpenNext.

## 2. Git Safety (Mandatory)
- NEVER work or commit on the `main` branch.
- DEFAULT BRANCH: ALWAYS `stage`.
- If you find yourself on `main`, switch to `stage` IMMEDIATELY.
- Push to `main` ONLY if explicitly told to do so.

## 3. Golden Workflow (Mandatory on every task)
After classifying the task category (see §5), execute these phases in order:
1. **Audit** — Read the Knowledge Graph report (`graphify-out/GRAPH_REPORT.md`) at the start of the task to understand dependencies and architecture, then read ONLY the directly relevant files. Verify current branch.
2. **Diagnose** — State the Category (A, B, or C) and explain the root cause clearly.
3. **Fix** — Make the smallest safe change. One task = one file. Edit file by file.
4. **Validate** — Prove your fix works (check SSR guards, no regressions).

> ❌ DO NOT scan the entire project at the start. Use the Knowledge Graph (`graphify-out/GRAPH_REPORT.md`) to navigate directly to the relevant files.

## 4. Surgical Editing Protocol
- Locate the specific line(s) requested.
- Replace ONLY the requested code.
- Always add SSR guards (`typeof window !== 'undefined'`) for browser APIs.
- ANY browser-only API (`window`, `document`, `AudioContext`, `localStorage`) MUST have: `if (typeof window === 'undefined') return;`
- ANY deployment must include the environment flag: `--env stage` or `--env prod`.

## 5. The 3-Category Navigation System
To optimize performance, classify every task into one of these categories **first**, then navigate directly to the relevant files.

### Category A: UI / Design / Layout
- **Location:** `src/components/`, `src/components/ui/`, `pages/` (JSX), `src/index.css`, `public/`
- **Purpose:** Styles, layout, React components, Tailwind classes, animations.
- **Rules:** Focus ONLY on Tailwind classes and UI components. DO NOT change business logic. Preserve RTL layout and existing design language.

### Category B: Functional / Logic
- **Location:** `src/lib/`, `pages/api/`, `src/hooks/`, `src/contexts/`, `src/lib/utils.js`
- **Purpose:** API calls, business logic, state management, form handling, helper functions.
- **Rules:** Locate the exact component or API route. Explain the gap between actual and expected behavior. Fix ONLY the broken logic with minimal changes.

### Category C: Deployment / Cloudflare
- **Location:** `wrangler.jsonc`, `next.config.js`, `open-next.config.ts`, `tailwind.config.cjs`, `postcss.config.cjs`, `build-cf.sh`, `.github/workflows/`
- **Purpose:** Dependencies, Cloudflare config, CI/CD, SSR/Edge compatibility.
- **Rules:** IMMEDIATELY read Section 7 in `ARCHITECTURE.md` (Deployment Crisis). Check `wrangler.jsonc`, SSR guards (`window`/`document`), and environment flags. Do not change code before identifying if it's an edge runtime incompatibility.

*Rule: Always report which category you used to solve the task.*

## 6. Version Lock (Critical — Do Not Override)
> ❌ DO NOT upgrade versions of: `react`, `react-dom`, `next`, `@opennextjs/cloudflare`

These versions were set deliberately after a 24-hour deployment crisis (28.04.2026). See `ARCHITECTURE.md` §7 and §10 for full context.

## 7. Reporting — Output Contract
At the end of every file change, report in this exact format:
```
- Category Identified: [A / B / C]
- File Edited: [path/to/file]
- Root Cause / Reason: [brief explanation]
- Status: [Done / Needs verification]
```
If a terminal command fails, provide the exact error message.

## 8. Chat Formatting
- When communicating in Hebrew in the chat, always wrap the text in `<div dir="rtl">` to ensure proper right-to-left layout.