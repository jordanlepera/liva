import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should navigate to the services page', async ({ page }) => {
      await page.goto('/');
      await page.waitForURL('/');

      await expect(
        page.getByRole('img', {
          name: 'hero liva maçonnerie',
        }),
      ).toHaveCount(2);

      await page.getByTestId('nos-services-nav').dispatchEvent('click');
      await page.waitForURL('/services');

      await expect(page).toHaveURL('/services');

      await expect(
        page.getByText(
          'Parcourez la liste de nos services pour découvrir nos prestations',
          { exact: false },
        ),
      ).toHaveCount(1);
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

    test('should take screenshot of the services page', async ({ page }) => {
      await page.goto('/services');

      await expect(
        page.getByRole('link', {
          name: 'Nos services',
        }),
      ).toHaveCount(1);

      await percySnapshot(page, 'Services');
    });
  });
});
