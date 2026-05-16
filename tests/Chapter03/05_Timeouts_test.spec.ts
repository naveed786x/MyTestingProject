import {test, expect} from '@playwright/test'

test('Timeout in playwright',async({page})=>{

    test.setTimeout(65000);

    //Navigate to URL
    await page.goto('https://www.youtube.com/');

    //Validate for the URL
    //await expect(page).toHaveURL('https://www.youtube.com1/',{timeout:3000});
    await expect(page).toHaveURL('https://www.youtube.com/');

    //click on search box and validate if its visible
    await page.getByRole('combobox', { name: 'Search1' }).click({timeout:15000});
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();

    //Enter the text in textbox
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.waitForTimeout(70000);

    //Click on Series link
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
})