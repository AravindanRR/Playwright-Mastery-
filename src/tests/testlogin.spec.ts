import { test, expect }  from  '@playwright/test';

test ( 'has the title', async({ page }) => {

await page.goto('https://playwright.dev/');
await page.screenshot({ path: 'screenshot.png' });
});