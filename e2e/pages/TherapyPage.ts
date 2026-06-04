import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object Model for /therapy and /couples.
 *
 * Covers shared structure: hero, FAQ accordion, CTA section.
 * Selector priority: getByRole > getByLabel > getByTestId.
 */
export class TherapyPage {
  readonly page: Page;

  // --- Headings ---
  readonly heroHeading: Locator;

  // --- FAQ accordion ---
  readonly faqSection: Locator;

  // --- CTA links ---
  readonly whatsappCTA: Locator;
  readonly couplesCTA: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heroHeading = page.getByRole('heading', { level: 1 });

    // FAQ accordion triggers are <button> elements inside AccordionTrigger
    this.faqSection = page.getByRole('heading', { name: 'שאלות נפוצות' });

    // Bottom CTA links
    this.whatsappCTA = page.getByRole('link', { name: 'בואו נדבר' });
    this.couplesCTA = page.getByRole('link', { name: 'לפרטים על ליווי זוגי' });
  }

  async gotoTherapy() {
    await this.page.goto('/therapy');
  }

  async gotoCouples() {
    await this.page.goto('/couples');
  }

  /** Returns all visible FAQ question buttons */
  async getFaqQuestions(): Promise<Locator> {
    return this.page.getByRole('button', { name: /.+\?$/ });
  }
}
