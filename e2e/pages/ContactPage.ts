import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object Model for /contact.
 *
 * Selector priority: getByRole > getByLabel > getByTestId.
 * Never use CSS/XPath.
 */
export class ContactPage {
  readonly page: Page;

  // --- Form inputs (via label) ---
  readonly nameInput: Locator;
  readonly phoneInput: Locator;

  // --- Buttons (semantic — via role) ---
  readonly submitButton: Locator;
  readonly callButton: Locator;

  // --- Consent checkbox (via label text) ---
  readonly marketingConsentCheckbox: Locator;

  // --- Success state (via testid — dynamic container) ---
  readonly successMessage: Locator;

  // --- Contact card links ---
  readonly whatsappLink: Locator;
  readonly phoneLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Form inputs — accessible via their sr-only <label> elements
    this.nameInput = page.getByLabel('שם מלא');
    this.phoneInput = page.getByLabel('מספר טלפון');

    // Submit button — semantic <button type="submit">
    this.submitButton = page.getByRole('button', { name: /שליחת פרטים|שולח/ });
    this.callButton = page.getByRole('button', { name: 'התקשר ישירות' });

    // Consent checkbox
    this.marketingConsentCheckbox = page.getByTestId('marketing-consent-checkbox');

    // Success confirmation container
    this.successMessage = page.getByTestId('contact-form-success');

    // Contact page quick links (WhatsApp + phone <a> tags)
    this.whatsappLink = page.getByRole('link', { name: /וואטסאפ|שלח הודעה/ });
    this.phoneLink = page.getByRole('link', { name: /053-2853235/ });
  }

  async goto() {
    await this.page.goto('/contact');
  }

  async fillForm(name: string, phone: string) {
    await this.nameInput.fill(name);
    await this.phoneInput.fill(phone);
  }

  async submitForm(name: string, phone: string) {
    await this.fillForm(name, phone);
    await this.submitButton.click();
  }
}
