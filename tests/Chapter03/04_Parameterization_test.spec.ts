import {test, expect} from '@playwright/test'

const titles = ['Playwright by Testers Talk','Cypress by Testers Talk']

for (const tit of titles) {

test(`Test Case 1 for ${tit} to validate`,async({page})=>{

    //Navigate to URL
    await page.goto('https://www.youtube.com/');

    //click on search box and validate if its visible
    await page.getByRole('combobox', { name: 'Search' }).click();

    //Enter the text in textbox
    await page.getByRole('combobox', { name: 'Search' }).fill(tit);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    //Validate title
    await expect(page.getByText(tit+'✅')).toBeVisible();

})
    
}



// test('Test Case 2 for Cypress by testers talk',async({page})=>{

//     //Navigate to URL
//     await page.goto('https://www.youtube.com/');

//     //click on search box and validate if its visible
//     await page.getByRole('combobox', { name: 'Search' }).click();

//     //Enter the text in textbox
//     await page.getByRole('combobox', { name: 'Search' }).fill('Cypress by testers talk');
//     await page.getByRole('combobox', { name: 'Search' }).press('Enter');

//     //Validate title
//     await expect(page.getByText('Cypress by Testers Talk☑️')).toBeVisible();

// })