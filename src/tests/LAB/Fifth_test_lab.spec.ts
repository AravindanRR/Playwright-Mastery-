import { test , expect } from '@playwright/test';

   test('Action and Assertions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');
   

});