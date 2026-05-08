# דוח סריקת פרויקט - Avihu Sitton Therapy
> עודכן: מאי 2026 — לאחר מעבר מ-Vite+React ל-Next.js 15 + Cloudflare Workers

## 1. מבנה קבצים ותיקיות
```text
.
├── .github/
│   └── workflows/
│       ├── deploy-stage.yml
│       ├── deploy-prod.yml
│       └── monitor-runtime-errors.yml
├── pages/
│   ├── _app.jsx              # Root provider wrapper
│   ├── api/
│   │   ├── health.js         # Health check endpoint
│   │   └── reviews.js        # Google Sheets proxy
├── public/
│   └── images/, fonts/, etc.
├── src/
│   ├── components/
│   │   └── ui/               (shadcn/ui primitives)
│   ├── contexts/
│   │   └── AudioContext.jsx
│   ├── hooks/
│   │   └── use-mobile.jsx
│   ├── lib/
│   │   ├── app-params.js
│   │   ├── PageNotFound.jsx
│   │   ├── query-client.js
│   │   └── utils.js
│   ├── utils/
│   │   └── index.ts
│   └── index.css
├── .clinerules               # (legacy VSCode/Cline — superseded by AGENTS.md)
├── build-cf.sh
├── eslint.config.js
├── next.config.js
├── open-next.config.ts
├── package.json
├── postcss.config.cjs        # ⚠️ שים לב: .cjs לא .js
├── tailwind.config.cjs       # ⚠️ שים לב: .cjs לא .js
├── wrangler.jsonc
└── ARCHITECTURE.md
```

## 2. Framework & Runtime
| פרמטר | ערך |
|---|---|
| Framework | Next.js 15.5.15 (Pages Router) |
| Runtime | Cloudflare Workers (Edge) |
| React | 19.0.0 |
| OpenNext adapter | @opennextjs/cloudflare ^1.19.4 |
| Production URL | https://avihusitton.com |
| Stage URL | https://therapy-new-stage.avihu-sitton.workers.dev |

## 3. Dependencies (מתוך package.json)
### תלויות ליבה:
- `react` (19.0.0) — ⚠️ אל תוריד גרסה
- `react-dom` (19.0.0) — ⚠️ אל תוריד גרסה
- `next` (15.5.15) — ⚠️ אל תוריד גרסה
- `@opennextjs/cloudflare` (^1.19.4) — ⚠️ אל תוריד גרסה
- `@tanstack/react-query` (^5.84.1)
- `framer-motion` (^11.16.4)

> ❌ **אין** react-router-dom — Next.js מנהל את ה-Routing

### ספריות UI ועיצוב:
- `tailwindcss` (^3.4.17)
- `lucide-react` (^0.475.0)
- `@radix-ui/*` (מגוון רכיבים — shadcn/ui)
- `embla-carousel-react` (^8.5.2)

### כלים וטפסים:
- `react-hook-form` (^7.54.2)
- `zod` (^3.24.2)
- `date-fns` (^3.6.0)
- `moment` (^2.30.1) — legacy, עדיף date-fns

## 4. Routes (נתיבים קיימים)
ב-Next.js Pages Router, ה-routes מוגדרים על ידי קבצי ה-`pages/` **ועל ידי** `src/pages.config.js`:

| נתיב | עמוד |
|---|---|
| `/` | HomePage |
| `/therapy` | TherapyPage |
| `/couples` | CouplesPage |
| `/reservists-workshops` | ReservistsWorkshopsPage |
| `/about` | AboutPage |
| `/contact` | ContactPage |
| `/terms` | TermsPage |
| `/privacy` | PrivacyPage |
| `/accessibility` | AccessibilityPage |
| `/api/health` | Health check |
| `/api/reviews` | Google Sheets proxy |

## 5. Entry Points
- **`pages/_app.jsx`**: Root provider wrapper (QueryClient + AudioProvider + Toaster)
- **`pages/api/`**: API Routes שרצים ב-Edge Runtime

> ❌ **אין** `main.jsx`, `App.jsx`, `App.css` — אלו היו חלק מהפרויקט הישן (Vite)

## 6. קריאות ל-API חיצוניים
- **`ContactForm.jsx`**: `fetch` ל-Webhook (עיבוד לידים)
- **`pages/api/reviews.js`**: Proxy ל-Google Sheets (ביקורות)

## 7. State Management
- **TanStack React Query** — ניהול server state (חייב per-request instance ב-SSR)
- **AudioContext.jsx** — Context גלובלי לניהול Audio Player
- אין Redux / Zustand

## 8. קבצי הגדרות קריטיים
| קובץ | מטרה |
|---|---|
| `wrangler.jsonc` | Cloudflare Workers config (שני environments: stage, prod) |
| `next.config.js` | Next.js config + security headers |
| `open-next.config.ts` | OpenNext adapter config |
| `tailwind.config.cjs` | Design tokens |
| `.github/workflows/` | CI/CD pipelines |

---
סריקה עודכנה — Next.js 15 + Cloudflare Workers Edge Runtime
