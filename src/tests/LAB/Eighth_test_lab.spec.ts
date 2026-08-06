import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test('Framework test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html');
    await expect(page).toHaveTitle('Frames');
    await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
    const singleIframeLink = await page.getByRole('link', { name: 'Single Iframe' });
    await expect(singleIframeLink).toBeVisible();
    await singleIframeLink.click();
    const singleIframe = await page.frameLocator('#singleframe');
    await expect(singleIframe.getByRole('textbox')).toBeVisible();
    await singleIframe.getByRole('textbox').fill('This is a test for single iframe');
    await expect(singleIframe.getByRole('textbox')).toHaveValue('This is a test for single iframe');
    await page.screenshot({ path: 'single_iframe_test.png'});
});

test('Download test', async ({ page, context }) => {

    await page.goto('https://demo.automationtesting.in/Index.html');
    await expect(page.locator('#logo')).toBeVisible();
    await page.getByRole('button', { name: 'Skip Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
    await page.getByRole('link', { name: 'More' }).click();
    const downloadFilesLink = await page.getByRole('link', { name: 'File Download' });
    await expect(downloadFilesLink).toBeVisible();
    await downloadFilesLink.click();
    await expect(page).toHaveURL('https://demo.automationtesting.in/FileDownload.html');
    await expect(page.getByRole('heading', { name: 'File Download Demo for Automation' })).toBeVisible();
    
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await page.waitForEvent('download');
    const customPath = 'C:\\Users\\AravindanRR\\Downloads\\KPI Testing\\' + download.suggestedFilename();
    await download.saveAs(customPath);
    expect(fs.existsSync(customPath)).toBe(true);
    console.log('File downloaded successfully:', customPath);
     
});

test('Popup Simple test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    page.on('dialog', async dialog => { await dialog.accept(); });
    await page.getByRole('button', { name: 'Simple Alert' }).click();

});

test('Popup Confirm Accept test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    page.on('dialog', async dialog => { console.log(dialog.message());  await dialog.accept();    });
    await page.getByRole('button', { name: 'Confirmation Alert' }).click();
    await expect(page.getByText('You pressed OK!')).toBeVisible();
});

test('Popup Confirm Dismiss test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    page.on('dialog', async dialog => { console.log(dialog.message());  await dialog.dismiss();    });
    await page.getByRole('button', { name: 'Confirmation Alert' }).click();
    await expect(page.getByText('You pressed Cancel!')).toBeVisible();
});

test('Popup Prompt Accept test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    page.on('dialog', async dialog => { console.log(dialog.message());  await dialog.accept('HarryPotter');    });
    await page.getByRole('button', { name: 'Prompt Alert' }).click();
    await expect(page.getByText('Hello Harry Potter! How are you today?')).toBeVisible();

});

test('Popup Prompt Cancel test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    page.on('dialog', async dialog => { console.log(dialog.message());  await dialog.dismiss();    });
    await page.getByRole('button', { name: 'Prompt Alert' }).click();
    await expect(page.getByText('User cancelled the prompt.')).toBeVisible();

});



