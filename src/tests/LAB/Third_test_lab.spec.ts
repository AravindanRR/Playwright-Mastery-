import { test , expect } from '@playwright/test';

   test('Action and Assertions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');
    // Select Radio button and assert its state
    await page.getByRole('radio', { name: 'Female', exact: true }).check(); 
    await expect(page.getByRole('radio', { name: 'Female', exact: true })).toBeChecked();
    await page.screenshot({ path: 'screenshots/select-radio-test2.png' });

    // Select Checkbox and assert its state
    await page.getByRole('checkbox', { name: 'Sunday', exact: true }).check();
    await expect(page.getByRole('checkbox', { name: 'Sunday', exact: true })).toBeChecked();
    await page.getByRole('checkbox', { name: 'Monday', exact: true }).check();
    await expect(page.getByRole('checkbox', { name: 'Monday', exact: true })).toBeChecked();
    await page.screenshot({ path: 'screenshots/select-checkbox-test3.png' });

    // Select Dropdown and assert its selected value
    await page.getByLabel('Country').click();
    await page.getByLabel('Country').selectOption('India');
    await expect(page.getByLabel('Country')).toHaveValue('india');
    await page.getByLabel('Country').click();
    await page.screenshot({ path: 'screenshots/select-dropdown-test4.png' });

    // Select Multiple Dropdown and assert its selected values
    await page.getByLabel('Colors:').selectOption(['Green', 'Red']);
    const selectedColors = await page.getByLabel('Colors:').evaluate((el: HTMLSelectElement) =>
        Array.from(el.selectedOptions).map(o => o.value)
    );
    await expect(selectedColors).toEqual(['red', 'green']);
    await page.screenshot({ path: 'screenshots/select-multidropdown-test5.png' });
    
    //Mouse Hover and assert the visibility of the tooltip
    await page.screenshot({ path: 'screenshots/mouse-hover-test6-before.png' });
    await expect(page.getByRole('button', { name: 'START', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'START' }).press('Enter');
    await expect(page.getByRole('button', { name: 'STOP', exact: true })).toBeVisible();
    await page.screenshot({ path: 'screenshots/mouse-hover-test6-after.png' });

    //Upload file and assert the file name
    const filePath = 'C:\\Users\\AravindanRR\\Downloads\\KPI Testing\\Dummy Test.txt'; // Replace with the actual file path
    await page.setInputFiles('input[type="file"]', filePath);
    const uploadedFileName = await page.$eval('input[type="file"]', (input: HTMLInputElement) => input.files?.[0]?.name);
    await expect(uploadedFileName).toBe('Dummy Test.txt');
    await page.screenshot({ path: 'screenshots/upload-file-test7.png' });
    await page.getByRole('button', { name: 'Upload Single File', exact: true }).click();
    // await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));

    // drag and Drop and assert the success message
    await page.getByText('Drag me to my target').dragTo(page.getByText('Drop here'));
    await expect(page.getByText('Dropped!')).toBeVisible();
    await page.screenshot({ path: 'screenshots/drag-drop-test8.png' });

    // scroll and assert the visibility of an element
    await page.getByRole('heading', { name: 'Form', exact: true }).scrollIntoViewIfNeeded();
    await page.screenshot({ path: 'screenshots/scroll-test9.png' });

});