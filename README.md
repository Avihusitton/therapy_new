# Avihu Sitton Therapy — Website & Automation System

This is a **Next.js 15 (Pages Router)** application for Avihu Sitton's therapy clinic, deployed on **Cloudflare Workers** via OpenNext. It features a clean, responsive RTL UI built with TailwindCSS and `shadcn/ui` components.

> For full technical documentation, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## Lead Management Automation (Make.com)

The core logic of the contact form is completely decoupled from any specific backend platform. When a user submits the "Contact Me" form on the site, the data is pushed directly to a **Make.com Webhook**.

### How it works:
1. **Form Validation**: The user inputs their Full Name and Phone Number. The local React component (`ContactForm.jsx`) validates that the phone number is a valid Israeli format (removes dashes, checks for `05x`, `0x`, or `972`).
2. **Payload Generation**:
   - The form generates a formatted timestamp (`he-IL` locale).
   - It cleans the phone number and formats it for WhatsApp (e.g. `972541234567`).
   - It generates a **WhatsApp Magic Link** which includes a pre-written message: `"היי [שם], ראיתי שהשארת פרטים באתר, אשמח לעזור! מתי נוח לך שנדבר?"`
3. **Webhook Dispatch**: The payload is sent via a `POST` request to the Make.com webhook URL.

### The Make.com Scenario
The Make.com scenario consists of 3 sequential steps:
1. **Webhook Listener**: Catches the incoming JSON payload from the website.
2. **Google Sheets Integration**: Maps the incoming fields (`date`, `time`, `full_name`, `phone`) and inserts them as a new row in the Leads spreadsheet. (Configured to use Column Headers as IDs to avoid breaking if columns move).
3. **Gmail Integration**: Sends an immediate email notification to `therapy@avihusitton.com`. The email body contains the lead's details and the clickable **WhatsApp Magic Link**, allowing the clinic owner to reply to the lead in one tap directly from their phone.

## Local Development
To run this project locally:

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment (Cloudflare Workers)
This project is deployed via **Cloudflare Workers** using the OpenNext adapter.
- Push to `stage` → deploys to `therapy-new-stage.avihu-sitton.workers.dev`
- Push to `main` → deploys to `avihusitton.com` (production, requires explicit approval)

Deployments are automated via GitHub Actions. See `.github/workflows/` for CI/CD pipelines.

> ⚠️ See `ARCHITECTURE.md` for critical deployment rules (version locks, `--env` flags, SSR guards).
