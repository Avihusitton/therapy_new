therapy-new — תיעוד טכני מלא
מטרת המסמך: מדריך מקיף לכל מפתח (כולל AI Agent) שיצטרך לעבוד על הפרויקט בעתיד.
נכתב לאחר משבר דיפלוי של 24 שעות שהתרחש ב-28.04.2026 — מטרתו למנוע הישנות.

1. סקירה כללית
therapy-new הוא אתר אישי של פסיכותרפיסט (אביהו סיטון), בנוי כאפליקציית Next.js הרצה על Cloudflare Workers באמצעות OpenNext.

פרמטר	ערך
Production URL	https://avihusitton.com
Stage URL	https://therapy-new-stage.avihu-sitton.workers.dev
Framework	Next.js 15.5.15 (Pages Router)
Runtime	Cloudflare Workers (Edge)
Node.js	22 (ב-GitHub Actions)
React	19.0.0
OpenNext adapter	@opennextjs/cloudflare ^1.19.4
2. ארכיטקטורת הפרויקט
2.1 מחסנית טכנולוגית
text
Browser → Cloudflare CDN → Cloudflare Worker (Edge Runtime)
                                    ↓
                         OpenNext adapter (worker.js)
                                    ↓
                         Next.js Pages Router (SSR/SSG)
                                    ↓
                      API Routes (pages/api/*)
                                    ↓
                         Google Sheets (ביקורות)
2.2 מבנה תיקיות
text
therapy-new/
├── pages/
│   ├── _app.jsx              # Root provider wrapper
│   ├── api/
│   │   ├── health.js         # Health check endpoint
│   │   └── reviews.js        # Google Sheets proxy
├── src/
│   ├── contexts/
│   │   └── AudioContext.jsx  # Audio player state management
│   ├── lib/
│   │   └── query-client.js   # TanStack Query factory
│   └── middleware.js         # CSP headers
├── .github/workflows/
│   ├── deploy-stage.yml      # CI/CD → stage
│   ├── deploy-prod.yml       # CI/CD → production
│   └── monitor-runtime-errors.yml  # Health monitor (cron)
├── wrangler.jsonc            # Cloudflare config
└── next.config.js            # Next.js config
3. קבצי ליבה — הסבר מפורט
3.1 wrangler.jsonc — קונפיגורציית Cloudflare
text
{
  "name": "therapy-new",
  "main": ".open-next/worker.js",
  "compatibility_date": "2026-04-27",
  "compatibility_flags": ["nodejs_compat"],
  "assets": { "directory": ".open-next/assets", "binding": "ASSETS" },
  "env": {
    "stage": { "name": "therapy-new-stage", ... },
    "prod":  { "name": "therapy-new", ... }
  }
}
נקודות קריטיות:

שדה "env" מגדיר שני Worker נפרדים: therapy-new-stage ו-therapy-new.

ה-deploy חייב לכלול --env stage או --env prod כדי לפגוע בWorker הנכון.

❌ ללא הדגל — הדיפלוי הולך ל-worker הבסיסי (therapy-new) ולא לסביבה הנכונה. זו הייתה הבעיה שגרמה לדיפלוי Stage לא להתעדכן למשך שעות.

nodejs_compat דרוש כדי ש-Node.js APIs (כמו Buffer, process) יעבדו ב-Edge runtime.

3.2 pages/_app.jsx — Root Provider
jsx
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      <AudioProvider>
        <Component {...pageProps} />
        <Toaster />
      </AudioProvider>
    </QueryClientProvider>
  );
}
סדר ה-Providers חשוב:

QueryClientProvider — חייב להיות חיצוני ביותר (כל ה-app צורך queries).

AudioProvider — context לניהול Audio Player גלובלי.

Toaster — נמצא בתוך ה-QueryClient כי toast-ים יכולים להיות תגובה ל-queries.

3.3 src/lib/query-client.js — TanStack Query Factory
javascript
let browserQueryClient = undefined;

export function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient(); // SSR: new instance per request
  }
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient; // Browser: singleton
}
למה זה קריטי — The Two-Instance Problem:

❌ הבעיה הקודמת: const queryClient = new QueryClient() ב-module scope.

ב-Edge runtime, modules נשארים חיים בין requests. QueryClient אחד יחיד שיתף state בין users שונים — דליפת מידע ו-crash.

✅ הפתרון הנוכחי: SSR תמיד מקבל instance חדש. Browser מקבל singleton בטוח.

3.4 src/contexts/AudioContext.jsx — Audio State
Context שמנהל את ה-Audio Player הגלובלי. כאשר ה-Route משתנה, ה-player מסתתר.

javascript
useEffect(() => {
  if (typeof window === 'undefined') return; // SSR guard
  // router events subscription
}, []);
נקודה חשובה: ה-typeof window === 'undefined' guard מונע קריסה ב-SSR.

❌ ללא הגנה זו: AudioContext (Web API) נגיש רק ב-Browser — קריאה אליו ב-Edge תייצר TypeError: Cannot read properties of undefined.

3.5 src/middleware.js — CSP Headers
Middleware שמגדיר Content Security Policy על כל הבקשות (מלבד static assets ו-API).

Domains מאושרים ב-CSP:

Resource Type	Domains
Scripts	self, cdn.userway.org (נגישות)
Styles	self, fonts.googleapis.com
Fonts	self, fonts.gstatic.com
Images	self, blob:, data:, cdn.userway.org
Connections	self, api.userway.org
שים לב: אם מוסיפים שירות חיצוני חדש (analytics, maps וכו'), חייבים לעדכן את ה-CSP כאן — אחרת הבקשות יחסמו בשקט.

4. API Routes
4.1 GET /api/health
מטרה: Health check לבדיקת חיות ה-Worker.

תגובה לדוגמה:

json
{
  "status": "ok",
  "timestamp": "2026-04-28T20:00:00.000Z",
  "env": { "NODE_ENV": "production", "NEXT_RUNTIME": "edge" }
}
מנוטר אוטומטית כל 10 דקות ע"י monitor-runtime-errors.yml.

4.2 GET /api/reviews
מטרה: Proxy לגיליון Google Sheets של ביקורות, מחזיר CSV.

Flow:

text
Client → /api/reviews → Google Sheets (Published CSV) → Client
ה-Google Sheet:

text
https://docs.google.com/spreadsheets/d/e/2PACX-1vRuKXRoldf0...pub?output=csv
Cache: public, max-age=3600 (שעה). שינויים ב-Sheet יופיעו באתר תוך שעה.

⚠️ נקודת כשל ידועה: אם ה-Sheet מוסר מ-"Published to web" — כל הביקורות יעלמו.

5. CI/CD — GitHub Actions
5.1 deploy-stage.yml — פריסה ל-Stage
מופעל על: Push ל-branch stage (מלבד שינויים בתיקיית monitoring/).

שלבים:

Checkout קוד

Node.js 22 setup

Validate Cloudflare secrets

npm ci --legacy-peer-deps — חובה עם הדגל (React 19 peer dep conflicts)

Verify react-dom/server.edge — וידוא ש-SSR module קיים

next build

npx @opennextjs/cloudflare build

npx @opennextjs/cloudflare deploy --env stage — חובה עם --env stage

Secrets נדרשים ב-GitHub:

CLOUDFLARE_API_TOKEN

CLOUDFLARE_ACCOUNT_ID

5.2 deploy-prod.yml — פריסה ל-Production
זהה ל-stage, מלבד:

מופעל על push ל-main

שלב ה-deploy: npx @opennextjs/cloudflare deploy --env prod

5.3 monitor-runtime-errors.yml — Health Monitor
מופעל: כל 10 דקות (cron: */10 * * * *).

Endpoints מנוטרים:

שם	URL
stage	https://therapy-new-stage.avihu-sitton.workers.dev
stage-home	https://therapy-new-stage.avihu-sitton.workers.dev/
stage-contact	https://therapy-new-stage.avihu-sitton.workers.dev/contact
stage-reviews	https://therapy-new-stage.avihu-sitton.workers.dev/api/reviews
stage-health	https://therapy-new-stage.avihu-sitton.workers.dev/api/health
prod	https://avihusitton.com
כשיש תקלה: מוסיף שורת JSON לקובץ monitoring/incidents.ndjson בענף stage וכותב GitHub Warning.

6. ספריות חיצוניות — שימוש ונקודות תשומת לב
6.1 UI Components
ספרייה	שימוש	הערות
@radix-ui/* (21 חבילות)	כל ה-UI Primitives	Accessible by default
lucide-react ^0.475.0	אייקונים	Tree-shakable
framer-motion ^11.16.4	אנימציות	Bundle weight בינוני
embla-carousel-react ^8.5.2	Carousel	]
next-themes ^0.4.4	Dark/Light mode	
6.2 Forms & Validation
ספרייה	שימוש
react-hook-form ^7.54.2	Form state management
@hookform/resolvers ^4.1.2	Zod integration
zod ^3.24.2	Schema validation
6.3 Data & State
ספרייה	שימוש	הערות
@tanstack/react-query ^5.84.1	Server state	חייב per-request instance ב-SSR
recharts ^2.15.4	גרפים	
date-fns ^3.6.0	תאריכים	
moment ^2.30.1	תאריכים (legacy)	כפילות עם date-fns — לנטוש בעתיד
lodash ^4.17.21	Utils	
6.4 Media & Rich Content
ספרייה	שימוש	הערות
react-quill ^2.0.0	Rich text editor	Browser only — דורש dynamic import עם ssr: false
react-markdown ^9.0.1	Markdown rendering	
three ^0.171.0	3D graphics	Heavy bundle — lazy load
html2canvas ^1.4.1	Screenshot	Browser only
jspdf ^2.5.2	PDF generation	Browser only
canvas-confetti ^1.9.4	Confetti effect	Browser only
6.5 Layout & Navigation
ספרייה	שימוש
@hello-pangea/dnd ^17.0.0	Drag & Drop
react-resizable-panels ^2.1.7	Resizable panels
react-leaflet ^4.2.1	מפות
vaul ^1.1.2	Drawer component
cmdk ^1.0.0	Command palette
6.6 Notifications
ספרייה	שימוש	הערות
sonner ^2.0.1	Toast notifications	Primary
react-hot-toast ^2.6.0	Toast notifications	Secondary — כפילות, לנטוש בעתיד
@radix-ui/react-toast	Toast primitive	
6.7 אינטגרציות חיצוניות
שירות	אינטגרציה	נקודת כשל
Google Sheets	Published CSV דרך /api/reviews	אם Sheet לא published — הביקורות נעלמות
UserWay (נגישות)	CDN script + API דרך CSP	אם CDN נפול — widget נעלם
Google Fonts	CSS import בסטייל	אם חסום — fallback fonts
Cloudflare Workers	Runtime	Edge compatibility חובה
7. משבר הדיפלוי — 28.04.2026
7.1 Timeline
שלב	בעיה	תיקון
1	npm ci נכשל — peer deps conflicts עם React 19	npm ci --legacy-peer-deps
2	react-dom/server.edge לא נמצא	שדרוג React 18→19, Next 15.1→15.5.15
3	QueryClient נוצר ב-module scope	getQueryClient() עם per-request SSR instance
4	AudioContext קרס ב-SSR	typeof window === 'undefined' guard
5	scriptVersion.id לא מתעדכן בקלאודפלייר	הוספת --env stage לפקודת deploy
7.2 הבעיה שגרמה ל-24 שעות של נסיונות כושלים
--env stage חסר מ-deploy-stage.yml

text
# ❌ מה שהיה (דיפלוי הלך לworker הלא נכון)
npx @opennextjs/cloudflare deploy

# ✅ מה שצריך להיות
npx @opennextjs/cloudflare deploy --env stage
ה-Workflow "הצליח" מבחינת GitHub Actions (exit code 0), אך Cloudflare קיבל דיפלוי ל-Worker הבסיסי (therapy-new) ולא ל-therapy-new-stage. לכן ה-scriptVersion.id בלוגים של stage לא התעדכן — הסימן לאבחון.

7.3 TypeError: Cannot read properties of undefined (reading 'contexts')
שגיאה זו ב-Cloudflare Logs הייתה הסימפטום. הסיבה: React context API (createContext) אינו זמין ב-SSR scope כפי שהיה בשימוש. קרה בגלל שילוב של:

React 19 שינה את האופן שבו SSR contexts עובדים.

AudioContext.jsx ניסה לגשת ל-Web API (AudioContext) ב-module scope ללא הגנה.

7.4 סימנים שיש בעיה בפעם הבאה
scriptVersion.id בקלאודפלייר לא משתנה לאחר push ← בעיית --env

GitHub Actions "ירוק" אבל האתר לא מתעדכן ← בדוק --env

TypeError: Cannot read properties of undefined ← browser-only API ב-SSR

npm ci נכשל ב-Actions ← נסה --legacy-peer-deps

react-dom/server.edge not found ← React גרסה ישנה או חסרה

8. Environment Variables & Secrets
GitHub Secrets (CI/CD)
שם	שימוש
CLOUDFLARE_API_TOKEN	Deploy ל-Workers
CLOUDFLARE_ACCOUNT_ID	זיהוי חשבון Cloudflare
Cloudflare Bindings
שם	סוג	שימוש
ASSETS	Static Assets Binding	Serving static files מה-Worker
משתני סביבה ב-runtime
שם	ערכים אפשריים	שימוש
NODE_ENV	production / development	CSP (unsafe-eval רק ב-dev)
NEXT_RUNTIME	edge	זיהוי runtime
9. כללי עבודה בטוחה
לפני כל Push ל-stage/main
בדוק: npm ci --legacy-peer-deps רץ בלי שגיאות לוקאלית

בדוק: npm run build מסתיים בהצלחה

בדוק: אין browser-only APIs ב-SSR scope (חפש window, document, AudioContext, localStorage)

בדוק: wrangler.jsonc מכיל את ה-environment הנכון

לאחר Deploy
פתח Cloudflare Dashboard → Workers → therapy-new-stage / therapy-new

בדוק ש-scriptVersion.id השתנה

בדוק /api/health מחזיר status: ok

בקר ב-URL הישיר ובדוק אין שגיאת 500

איך לקרוא את Cloudflare Logs
outcome: "ok" + exceptions: [] = הכל תקין

outcome: "exception" או response.status: 500 = יש בעיה

scriptVersion.id = הטיפול בגרסה שרצה. אם לא השתנה אחרי deploy ← --env חסר

Browser-Only Libraries — חובה dynamic import
javascript
// ✅ נכון — react-quill, three, html2canvas, jspdf
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
ספריות שדורשות זאת: react-quill, three, html2canvas, jspdf, canvas-confetti, react-leaflet.

10. תלויות ומפת גרסאות קריטיות
חבילה	גרסה	למה גרסה זו
react	19.0.0	חובה ל-react-dom/server.edge ב-Edge runtime
react-dom	19.0.0	זהה לreact
next	15.5.15	תואם ל-OpenNext 1.19+
@opennextjs/cloudflare	^1.19.4	תואם ל-Next 15.5
wrangler	^4.84.1	תואם ל-compatibility_date 2026-04-27
⚠️ אל תוריד גרסאות אלו — שדרוג React 18→19 היה הכרחי לתמיכת Edge SSR.

נכתב: 28.04.2026 | עודכן: 28.04.2026 — ניתוק Cloudflare Pages Integration
t e s t  
 