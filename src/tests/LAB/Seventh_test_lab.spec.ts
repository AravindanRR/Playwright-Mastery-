import { test, expect } from '@playwright/test';

test('Dashboard loads', async ({ page }) => {

    await page.goto('/web/index.php/dashboard/index');
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});