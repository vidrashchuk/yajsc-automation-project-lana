import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';

test('Verify login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await loginPage.open();

  await loginPage.login(
    'customer@practicesoftwaretesting.com',
    'welcome01'
  );

  await expect(page).toHaveURL(
    'https://practicesoftwaretesting.com/account'
  );

  await expect(accountPage.pageHeading).toBeVisible();

  await expect(accountPage.header.userName).toBeVisible();
});