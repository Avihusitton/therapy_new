# Security Checklist — Avihu Sitton Therapy
> עודכן לאחרון: 2026-05-28 | גרסה: 1.0.0
> קרא וסמן ✅ לפני כל commit של feature/page חדש.

## 1. Secrets & Environment Variables
- [ ] אין API keys, tokens, או סיסמאות בקוד הלקוח
- [ ] משתני סביבה רגישים לא מתחילים ב-NEXT_PUBLIC_ (אלא אם כן הם אכן מיועדים לציבור)
- [ ] .env מופיע ב-.gitignore

## 2. Form & Input Security
- [ ] כל טופס שמקבל קלט חופשי מהמשתמש כולל Honeypot field (כמו שנעשה ב-ContactForm.jsx)
- [ ] כל קלט משתמש שמוצג חזרה למסך עובר sanitization
- [ ] טפסים כפופים ל-rate limiting בצד שרת (במידה ועובדים עם API Routes לטפסים)

## 3. API Routes
- [ ] כל endpoint שמבצע פעולה רגישה מאמת session/token
- [ ] אין IDOR — משתמש לא יכול לגשת לנתונים של משתמש אחר
- [ ] ה-endpoints הציבוריים (כמו health check) אינם חושפים פרטים מזהים או Http Headers של הלקוח

## 4. ניקוי קוד AI
- [ ] אין קוד בהערות שמכיל מידע רגיש
- [ ] אין placeholder secrets (YOUR_API_KEY, sk-test-xxx וכדומה)
- [ ] אין ספריות ב-package.json שאינן בשימוש ממשי

## 5. Headers
- [ ] X-Frame-Options מוגדר
- [ ] X-Content-Type-Options מוגדר
- [ ] Referrer-Policy מוגדר
- [ ] CSP מנוהל ומעודכן ב-middleware.js

## 6. שונות
- [ ] הודעות שגיאה בפרודקשן לא חושפות stack traces
- [ ] External links כוללים rel="noopener noreferrer"
