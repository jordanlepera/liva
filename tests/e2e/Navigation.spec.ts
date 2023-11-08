import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should navigate to the about page', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('img', {
          name: 'hero liva maçonnerie',
        }),
      ).toHaveCount(2);

      const links = await page
        .getByRole('link', { name: 'Nos services' })
        .all();

      await links[1]?.click();

      await expect(page).toHaveURL('/about');

      await expect(
        page.getByText('Lorem ipsum dolor sit amet', { exact: false }),
      ).toHaveCount(2);
    });

    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

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
      ).toHaveCount(2);

      await percySnapshot(page, 'About');
    });
  });
});
