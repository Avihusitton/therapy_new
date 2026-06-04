import { test, expect } from '@playwright/test';

/**
 * Navigation E2E tests — verifies all user-facing routes render
 * and desktop navigation links work.
 */

const ROUTES = [
  { path: '/', heading: /אביהו סיטון|בית/ },
  { path: '/therapy', heading: /לזהות את הדפוסים/ },
  { path: '/couples', heading: /זוגיות|ליווי זוגי/ },
  { path: '/about', heading: /אודות|אביהו סיטון/ },
  { path: '/contact', heading: /צרו קשר/ },
  { path: '/reservists-workshops', heading: /מילואימניקים|סדנאות/ },
  { path: '/accessibility', heading: /נגישות/ },
  { path: '/privacy', heading: /פרטיות/ },
  { path: '/terms', heading: /תנאי שימוש/ },
];

test.describe('Route accessibility', () => {
  for (const route of ROUTES) {
    test(`${route.path} loads and renders heading`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.ok()).toBeTruthy();

      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();
    });
  }
});

test.describe('Desktop navigation', () => {
  test('navigating from home to each main page via header links', async ({ page }) => {
    await page.goto('/');

    const navLinks = [
      { name: 'טיפול אישי', expectedPath: '/therapy' },
      { name: 'זוגיות', expectedPath: '/couples' },
      { name: 'מילואימניקים', expectedPath: '/reservists-workshops' },
      { name: 'אודות', expectedPath: '/about' },
      { name: 'צור קשר', expectedPath: '/contact' },
    ];

    for (const link of navLinks) {
      // Always start from home for clean state
      await page.goto('/');

      // Use the desktop nav (first matching link)
      const navLink = page.getByRole('link', { name: link.name }).first();
      await navLink.click();

      await page.waitForURL(`**${link.expectedPath}`);
      expect(page.url()).toContain(link.expectedPath);
    }
  });
});
