# דוח סריקת פרויקט - Avihu Sitton Therapy

## 1. מבנה קבצים ותיקיות
```text
.
├── .git/
├── claude-design/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   │   └── ui/ (shadcn/ui components)
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── pages.config.js
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 2. Dependencies (מתוך package.json)
### תלויות ליבה:
- `react` (^18.2.0)
- `react-dom` (^18.2.0)
- `react-router-dom` (^6.26.0)
- `framer-motion` (^11.16.4)
- `@tanstack/react-query` (^5.84.1)

### ספריות UI ועיצוב:
- `tailwindcss` (^3.4.17)
- `lucide-react` (^0.475.0)
- `@radix-ui/*` (מגוון רכיבים: accordion, dialog, tabs וכו')
- `embla-carousel-react` (^8.5.2)
- `canvas-confetti` (^1.9.4)

### כלים וטפסים:
- `react-hook-form` (^7.54.2)
- `zod` (^3.24.2)
- `date-fns` (^3.6.0)
- `moment` (^2.30.1)

### ספריות מיוחדות:
- `react-leaflet` (^4.2.1) - למפות
- `three` (^0.171.0) - לגרפיקה בתלת-מימד
- `jspdf`, `html2canvas` - להפקת PDF
- `recharts` - לגרפים

## 3. קובץ ראשי (Entry Point)
- **main.jsx**: מאתחל את ה-React App ומפעיל את ה-`BrowserRouter`.
- **App.jsx**: מנהל את ה-Routes הראשיים ואת ה-Layout של האתר.

## 4. Routes (נתיבים קיימים)
הנתיבים מוגדרים דינמית דרך `pages.config.js`:
- `/` -> HomePage
- `/therapy` -> TherapyPage
- `/couples` -> CouplesPage
- `/reservists-workshops` -> ReservistsWorkshopsPage
- `/about` -> AboutPage
- `/contact` -> ContactPage
- `/terms` -> TermsPage
- `/privacy` -> PrivacyPage
- `/accessibility` -> AccessibilityPage

## 5. קריאות ל-API חיצוניים
- **ContactForm.jsx**: קריאת `fetch` ל-Webhook (לעיבוד לידים).
- **TestimonialsSection.jsx**: קריאת `fetch` ל-Google Sheets (למשיכת המלצות).

## 6. State Management
- לא זוהתה ספריית ניהול State גלובלית (כמו Redux או Zustand).
- נעשה שימוש ב-React State מקומי ובווריאציות של Context API עבור רכיבי UI ספציפיים.
- **react-query** משמש לניהול ה-State של המידע המגיע מה-API (המלצות).

---
סריקה הושלמה — מוכן לשלב 2
