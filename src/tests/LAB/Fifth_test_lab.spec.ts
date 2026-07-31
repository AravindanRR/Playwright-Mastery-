import { test , expect } from '@playwright/test';

 test('Demo test_1', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/);
});

test.fail('Demo test_2', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/);
});

test.skip('Demo test_3', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/);
});

test.fixme('Demo test_4', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('Demo test_5', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/);
});

test.describe('two tests', () => {
  test('one', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('two', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Example Domain/);
  });
});

test('example test', async ({ page, browser }) => {
  test.info().annotations.push({
    type: 'browser version',
    description: browser.version(),
  });

   await page.goto('/');
   await expect(page).toHaveTitle(/Example Domain/);
});