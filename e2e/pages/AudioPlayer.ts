import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object Model for the FloatingAudioPlayer component.
 *
 * This component appears on multiple pages (home, about, reservists-workshops).
 * Selector priority: getByRole > getByLabel > getByTestId.
 */
export class AudioPlayer {
  readonly page: Page;

  // --- Region container (via role="region" + aria-label) ---
  readonly playerRegion: Locator;

  // --- Play/Pause button (semantic <button> with dynamic aria-label) ---
  readonly playButton: Locator;
  readonly pauseButton: Locator;

  // --- Close button (semantic <button> with aria-label) ---
  readonly closeButton: Locator;

  // --- Progress bar (div acting as interactive control — testid) ---
  readonly progressBar: Locator;

  constructor(page: Page) {
    this.page = page;

    this.playerRegion = page.getByRole('region', { name: 'נגן ראיון רדיו' });
    this.playButton = page.getByRole('button', { name: 'הפעל' });
    this.pauseButton = page.getByRole('button', { name: 'השהה' });
    this.closeButton = page.getByRole('button', { name: 'סגור נגן' });
    this.progressBar = page.getByTestId('audio-progress-bar');
  }

  async waitForVisible() {
    await this.playerRegion.waitFor({ state: 'visible' });
  }

  async play() {
    await this.playButton.click();
  }

  async pause() {
    await this.pauseButton.click();
  }

  async close() {
    await this.closeButton.click();
  }

  async isVisible(): Promise<boolean> {
    return this.playerRegion.isVisible();
  }
}
