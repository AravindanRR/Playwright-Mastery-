import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage'; 
    
    test('Basic login flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Navigate to login page
    await page.goto('https://sentinel-qa-fe.service.capbpm.com/sentinel');
    await loginPage.login('QABhaai', 'Bhaai@2026');

    // // Fill in username/email
    // await page.fill('input[placeholder="Enter your email"]', 'QABhaai');
    // // Fill in password
    // await page.fill('input[placeholder="Enter your password"]', 'Bhaai@2026');
    // // Click login button
    // await page.locator('//ion-button[@data-testid="login-submit"]').click();
    
    // Wait for navigation to dashboard
    await page.waitForURL('**/sentinel');
    // Verify successful login
    await expect(page.locator('//span[normalize-space(.)="Projects"]')).toBeVisible();
    await page.getByText('Project', { exact: true }).click();
    await page.screenshot({ path: 'login-success.png', fullPage: true });
    await page.locator('//ion-segment-button[@value="projects"]').click();
    await page.locator('//ion-segment-button[@value="integrations"]').click();
    await expect(page.locator('//ion-button[normalize-space(.)="Save"]')).toBeVisible();

    
    });


