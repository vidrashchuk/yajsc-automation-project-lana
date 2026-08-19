import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Verify user can view product details', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.openProduct('Combination Pliers');

  await expect(page).toHaveURL(/\/product/);

  await expect(homePage.productName).toHaveText(
    'Combination Pliers'
  );

  await expect(homePage.productPrice).toContainText('14.15');

  await expect(homePage.addToCartButton).toBeVisible();

  await expect(homePage.addToFavoritesButton).toBeVisible();
});