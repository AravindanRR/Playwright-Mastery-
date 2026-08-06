import {test , expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Screenshot comparison test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveScreenshot('test-1.png');
});

test('Text comparison test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
});

test('Accessibility Test', async ({ page }) => {

  await page.goto('https://playwright.dev');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);

});