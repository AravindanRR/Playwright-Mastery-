import { test, expect } from '@playwright/test';

test('GET Users API', async ({ request }) => {

    const response =
      await request.get('/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);

});


test('Dashboard API failure', async ({ page }) => {
  await page.route('**/dashboard/**', async route => {
    await route.fulfill({ status: 500, contentType: 'application/json',
      body: JSON.stringify({ message: 'Internal Server Error'})
    });
  });
  await page.goto('/web/index.php/dashboard/index');
  // Validate how UI behaves
});