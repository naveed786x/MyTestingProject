import { test, expect } from '@playwright/test'

test('Multiple Browser Tabs', async ({ page, browser }) => {

    //Navigate to URL
    await page.goto('https://www.youtube.com/');

    //click on search box and validate if its visible
    await page.getByRole('combobox', { name: 'Search' }).click();

    //Enter the text in textbox
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on Series link
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    //Multiple browser opens here

    const newbrowser = await browser.newContext();
    const page1 = await newbrowser.newPage();

    await page1.goto('https://www.youtube.com/');

    //click on search box and validate if its visible
    await page1.getByRole('combobox', { name: 'Search' }).click();

    //Enter the text in textbox
    await page1.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
    await page1.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Click on Series link
    await page1.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    //Multiple tabs of 2nd browser

    const page2 = await newbrowser.newPage();

    await page2.goto('https://www.youtube.com/');

    //click on search box and validate if its visible
    await page2.getByRole('combobox', { name: 'Search' }).click();

})
