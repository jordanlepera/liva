import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should navigate to the about page', async ({ page }) => {
      await page.goto('/');
      await page.waitForURL('/');

      await expect(
        page.getByRole('img', {
          name: 'hero liva maçonnerie',
        }),
      ).toHaveCount(2);

      await page.getByRole('link', { name: 'Nos services' }).click();
      await page.waitForURL('/about');

      await expect(page).toHaveURL('/about');

      await expect(
        page.getByText('Lorem ipsum dolor sit amet', { exact: false }),
      ).toHaveCount(2);
    });

    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');
      await page.waitForURL('/');

      await expect(
        page.getByRole('img', {
          name: 'hero liva maçonnerie',
        }),
      ).toHaveCount(2);

      await percySnapshot(page, 'Homepage');
    });

    test('should take screenshot of the about page', async ({ page }) => {
      await page.goto('/about');

      await expect(
        page.getByRole('link', {
          name: 'Nos services',
        }),
      ).toHaveCount(1);

      await percySnapshot(page, 'About');
    });
  });
});
