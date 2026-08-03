import { test , expect } from '@playwright/test';

 test('Demo test_1', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name:'Login'}).click();
  await page.getByAltText('client brand banner').isVisible();
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});

test.fail('Demo test_2', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name:'Login'}).click();
  await page.getByAltText('client brand banner').isVisible();
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});

test.skip('Demo test_3', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name:'Login'}).click();
  await page.getByAltText('client brand banner').isVisible();
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});

test.fixme('Demo test_4', async ({ page }) => {
 await page.goto('/');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name:'Login'}).click();
  await page.getByAltText('client brand banner').isVisible();
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});

test('Demo test_5', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name:'Login'}).click();
  await page.getByAltText('client brand banner').isVisible();
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});

test.describe('two tests', () => {
  test('one', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name:'Login'}).click();
  await page.getByAltText('client brand banner').isVisible();
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
  });

  test('two', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name:'Login'}).click();
  await page.getByAltText('client brand banner').isVisible();
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
  });
});

test('example test', async ({ page, browser }) => {
  test.info().annotations.push({
    type: 'browser version',
    description: browser.version(),
  });

  await page.goto('/');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name:'Login'}).click();
  await page.getByAltText('client brand banner').isVisible();
  await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});