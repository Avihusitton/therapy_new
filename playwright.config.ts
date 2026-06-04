import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for therapy_new E2E tests.
 *
 * baseURL priority:
 *   1. DEPLOYMENT_URL — injected by CI after Cloudflare deploy
 *   2. BASE_URL       — manual override
 *   3. localhost:3000  — local dev fallback
 */
export default defineConfig({
  testDir: './e2e/specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'html',

  use: {
    baseURL:
      process.env.DEPLOYMENT_URL ??
      process.env.BASE_URL ??
      'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    locale: 'he-IL',
    // RTL site — force viewport wide enough for desktop nav
    viewport: { width: 1280, height: 720 },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
