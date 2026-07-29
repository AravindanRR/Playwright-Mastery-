import {test, expect} from '@playwright/test';

test('First test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page).toHaveTitle('Automation Testing Practice');
    await page.getByPlaceholder('Enter Name').fill('Bhaai');
    await page.getByPlaceholder('Enter Email').fill('Bhaai@2026');
    await page.getByPlaceholder('Enter Phone').fill('888383298327');
    await page.getByLabel('Address').fill('Thanks you so much for your support and guidance. I will be grateful to you for this.');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.screenshot({ path: 'screenshots/first-test.png' });
});

test('Second test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page).toHaveTitle('Automation Testing Practice');
    await page.getByRole('checkbox', { name: 'Sunday', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Monday', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Tuesday', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Wednesday', exact: true }).check();

    await page.getByLabel('Country').click();
    //by Value
    await page.getByLabel('Country').selectOption('India');
    await page.getByLabel('Country').selectOption('United States');
    //by visible text
    await page.getByLabel('Country').selectOption({ label: 'Canada' }); 
    await page.getByLabel('Country').selectOption({ label: 'Australia' });
    //by index
    await page.getByLabel('Country').selectOption({ index: 1 });
    await page.getByLabel('Country').selectOption({ index: 2 });
    await page.getByLabel('Country').click();
    await page.screenshot({ path: 'screenshots/second-test.png' });

});

test('Third test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(page).toHaveTitle('Automation Testing Practice');
    await page.getByLabel('Colors:').selectOption('Green');
    await page.getByLabel('Sorted List:').selectOption('Cat');
    await page.screenshot({ path: 'screenshots/third-test.png' });

});