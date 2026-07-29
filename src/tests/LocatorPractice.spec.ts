import {test, expect } from '@playwright/test';

test('Locator Practice', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');   

    const checkbox = page.getByRole('checkbox').nth(2);
    const visible = await checkbox.isVisible();
    console.log('Checkbox visible:', visible);

    //await page.getByTestId('user-profile-card').isVisible();

    // await page.getByTitle('HyperText Markup Language').isVisible();
    
   // await page.getByAltText('logo').isVisible();

    //await page.getByRole('button',{name:'Primary Action'}).isVisible();
    //await page.getByRole('button',{name:'Toggle Button'}).isVisible();
    //await page.getByLabel('Username').fill('Playwright');
    //await page.getByLabel(' Accept terms').isVisible();
    //await page.locator('(//a[text()="Home"])[1]').click();
    //await page.getByRole('alert',{name:' This is an important alert message!'})
    //await expect(page.getByText('Another paragraph with ')).toBeVisible();
    //await expect(page.getByRole('link',{name:'List item 1'})).toBeVisible();
    //await page.getByText('Submit Form').isVisible();
  
    // await page.getByRole('button',{name:'Submit Form'}).isVisible();
    // await page.getByLabel('Email Address:').fill('Test@gmail.com');
    // await page.getByLabel('Password:').fill('Test@123');    
    // await page.getByLabel('Your Age:').fill('25');
    // await page.getByLabel('Standard').click();

    // await page.getByPlaceholder('Enter your full name').fill('Test Panni Paruda');
    // await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('888383298327');
    // await page.getByPlaceholder('Type your message here...').fill('Thank you so much for your support and guidance. I will be grateful to you for this.');
    // await page.getByPlaceholder('Search products...').fill('Playwright');
    // // await page.getByPlaceholder('Search').isVisible();

    // await expect(page.getByRole('button',{name:'Search'})).toBeVisible();
    



});