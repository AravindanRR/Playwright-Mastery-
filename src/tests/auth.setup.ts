import { test as setup, expect } from '@playwright/test';

setup('authenticate', async ({ page }) => {

    await page.goto('/');
    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByAltText('client brand banner').isVisible();
    await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });

});