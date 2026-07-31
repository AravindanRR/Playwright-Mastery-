import { test, expect } from '@playwright/test';

test('Action and Assertions', async ({ page }) => {

    // Input text into a text field
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');
    await page.getByPlaceholder('Enter Name').fill('Bhaai');
    await page.getByPlaceholder('Enter Email').fill('Bhaai@2026');
    await page.getByPlaceholder('Enter Phone').fill('888383298327');
    await page.getByPlaceholder('Enter Phone').screenshot({ path: 'screenshots/Input-text-test.png' });
    await page.screenshot({path: 'screenshots/Input-text-test2.png'});
    await page.screenshot({path: 'screenshots/Input-text-test3.png', fullPage: true});
    // const buffer = await page.screenshot();
    // console.log(buffer.toString('base64'));

    await page.getByLabel('Address').fill('Thanks you so much for your support and guidance. I will be grateful to you for this.');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.screenshot({ path: 'screenshots/Input-text-test1.png' });
    
    // Select Radio button and assert its state
    await page.getByRole('radio', { name: 'Female', exact: true }).check(); 
    await expect(page.getByRole('radio', { name: 'Female', exact: true })).toBeChecked();
    await page.screenshot({ path: 'screenshots/select-radio-test2.png' });

}); 