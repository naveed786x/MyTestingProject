import {test, expect} from '@playwright/test'

test.skip('Test Case 1 ',async({page})=>{

    //Navigate to URL
    await page.goto('https://www.youtube.com/');

    //Validate for the URL
    await expect(page).toHaveURL('https://www.youtube.com/');

    //click on search box and validate if its visible
    await page.getByRole('combobox', { name: 'Search' }).click();
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();

    //Enter the text in textbox
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Validate title
    await expect(page).toHaveTitle(/playwright/);

    //Click on Series link
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
})

test('Test Case 2 ',async({page})=>{

    //Navigate to URL
    await page.goto('https://www.youtube.com/');

    //Validate for the URL
    await expect(page).toHaveURL('https://www.youtube.com/');

    //click on search box and validate if its visible
    await page.getByRole('combobox', { name: 'Search' }).click();
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();

    //Enter the text in textbox
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Validate title
    await expect(page).toHaveTitle(/playwright/);

    //Click on Series link
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
})

test('Test Case 3 ',async({page})=>{

    //Navigate to URL
    await page.goto('https://www.youtube.com/');

    //Validate for the URL
    await expect(page).toHaveURL('https://www.youtube.com/');

    //click on search box and validate if its visible
    await page.getByRole('combobox', { name: 'Search' }).click();
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();

    //Enter the text in textbox
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Validate title
    await expect(page).toHaveTitle(/playwright/);

    //Click on Series link
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
})

test.only('Test Case 4 ',async({page})=>{

    //Navigate to URL
    await page.goto('https://www.youtube.com/');

    //Validate for the URL
    await expect(page).toHaveURL('https://www.youtube.com/');

    //click on search box and validate if its visible
    await page.getByRole('combobox', { name: 'Search' }).click();
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();

    //Enter the text in textbox
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Validate title
    await expect(page).toHaveTitle(/playwright/);

    //Click on Series link
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
})