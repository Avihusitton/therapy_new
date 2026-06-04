import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

/**
 * Contact form E2E tests.
 *
 * NOTE: The form submits to /api/contact which proxies to Make.com webhook.
 * In CI, the webhook may not be available, so we mock the API response.
 */

test.describe('Contact form — UI rendering', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
  });

  test('form fields are visible and editable', async () => {
    await expect(contactPage.nameInput).toBeVisible();
    await expect(contactPage.phoneInput).toBeVisible();
    await expect(contactPage.submitButton).toBeVisible();
    await expect(contactPage.callButton).toBeVisible();
  });

  test('contact cards (WhatsApp, phone) are visible', async () => {
    await expect(contactPage.whatsappLink).toBeVisible();
    await expect(contactPage.phoneLink).toBeVisible();
  });

  test('marketing consent checkbox is unchecked by default', async () => {
    await expect(contactPage.marketingConsentCheckbox).not.toBeChecked();
  });
});

test.describe('Contact form — validation', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
  });

  test('empty submission triggers browser required validation', async ({ page }) => {
    await contactPage.submitButton.click();

    // HTML5 required validation — form should not submit
    // The name input has required attr, so the form stays on the page
    await expect(contactPage.successMessage).not.toBeVisible();
  });
});

test.describe('Contact form — successful submission (mocked)', () => {
  test('shows success message after form submission', async ({ page }) => {
    // Mock the /api/contact endpoint to return 200
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    const contactPage = new ContactPage(page);
    await contactPage.goto();

    await contactPage.submitForm('ישראל ישראלי', '054-1234567');

    // Wait for success message to appear
    await expect(contactPage.successMessage).toBeVisible({ timeout: 10000 });
  });
});
