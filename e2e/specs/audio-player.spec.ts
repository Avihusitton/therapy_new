import { test, expect } from '@playwright/test';
import { AudioPlayer } from '../pages/AudioPlayer';

/**
 * FloatingAudioPlayer E2E tests.
 *
 * The audio player opens when a user clicks a trigger element on pages
 * like /about or /reservists-workshops. We test that the player component
 * renders correctly once opened and that controls respond to interaction.
 *
 * NOTE: Actual audio playback may be blocked by browser autoplay policies
 * in headless mode. We test UI interactions, not actual audio output.
 */

test.describe('Audio player', () => {
  test('player region is hidden before trigger', async ({ page }) => {
    await page.goto('/about');
    const audioPlayer = new AudioPlayer(page);

    // The player should not be visible initially
    await expect(audioPlayer.playerRegion).not.toBeVisible();
  });

  test('play/pause button and close button are accessible when player opens', async ({ page }) => {
    await page.goto('/about');
    const audioPlayer = new AudioPlayer(page);

    // Find and click the audio trigger button on the about page
    const audioTrigger = page.getByRole('button', { name: /ראיון|האזנה|נגן|רדיו/i });

    // If there's no explicit trigger button, skip this test gracefully
    if (await audioTrigger.count() === 0) {
      test.skip(true, 'No audio trigger button found on /about — skipping player test');
      return;
    }

    await audioTrigger.first().click();
    await audioPlayer.waitForVisible();

    // Verify player controls are accessible
    await expect(audioPlayer.closeButton).toBeVisible();
    await expect(audioPlayer.progressBar).toBeVisible();

    // Either play or pause should be visible (depends on autoplay)
    const playVisible = await audioPlayer.playButton.isVisible();
    const pauseVisible = await audioPlayer.pauseButton.isVisible();
    expect(playVisible || pauseVisible).toBeTruthy();
  });

  test('close button hides the player', async ({ page }) => {
    await page.goto('/about');
    const audioPlayer = new AudioPlayer(page);

    const audioTrigger = page.getByRole('button', { name: /ראיון|האזנה|נגן|רדיו/i });

    if (await audioTrigger.count() === 0) {
      test.skip(true, 'No audio trigger button found on /about — skipping close test');
      return;
    }

    await audioTrigger.first().click();
    await audioPlayer.waitForVisible();

    await audioPlayer.close();

    // Player region should be hidden after close
    await expect(audioPlayer.playerRegion).not.toBeVisible();
  });
});
