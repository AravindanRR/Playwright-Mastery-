import { test , expect } from '@playwright/test';

   test('Test 1: Action and Assertions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('heading', { name: 'Automation Testing Practice' }).click();
    await expect(page.getByRole('textbox', { name: 'Enter Name' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Enter EMail' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Enter Phone' }).click();
    await expect(page.getByRole('textbox', { name: 'Address:' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Address:' }).click();
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.getByRole('checkbox', { name: 'Tuesday' }).check();
    await page.getByRole('checkbox', { name: 'Thursday' }).check();
    await page.getByRole('checkbox', { name: 'Saturday' }).check();
    await page.getByLabel('Country:').selectOption('uk');
    await page.getByLabel('Colors:').selectOption('Blue');
    await page.getByLabel('Sorted List:').selectOption('deer');
});

 test('Test 2: Correct Credential' , async ({page}) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    await expect(page.getByAltText('Practice Test Automation')).toBeVisible();
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
    await page.getByRole('heading', {name:'Logged In Successfully'}).isVisible();
    await page.getByText('Log out').click();
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
 });

  test('Test 3: Incorrect Password' , async ({page}) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    await expect(page.getByAltText('Practice Test Automation')).toBeVisible();
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password');
    await page.getByRole('button', {name: 'Click'}).click();
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
    await page.getByRole('heading', {name:'Logged In Successfully'}).isVisible();
    await page.getByText('Log out').click();
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
 });

   test('Test 4: Incorrect Username' , async ({page}) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    await expect(page.getByAltText('Practice Test Automation')).toBeVisible();
    await page.getByLabel('student').fill('student123');
    await page.getByLabel('Password').fill('Password');
    await page.getByRole('button', {name: 'Click'}).click();
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
    await page.getByRole('heading', {name:'Logged In Successfully'}).isVisible();
    await page.getByText('Log out').click();
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
 });

    test('Test 5: Login Orange HRM' , async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

 });
