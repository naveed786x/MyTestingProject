import {test, expect, Locator} from '@playwright/test'

test('Verify Locators',async({page})=>{

    //Navigating to the youtube page
    await page.goto('https://practice.expandtesting.com/dropdown');

    //select dropdown by value
    await page.locator('#dropdown').selectOption('1');

    //select dropdown by visible text
    await page.locator('#dropdown').selectOption('Option 2');

    // get the values of the dropdown and validate them
    const dropdownOptions = await page.locator('#dropdown > option').allTextContents();
    console.log('Values in dropdown are :', dropdownOptions);
    //await expect(dropdownOptions).toEqual(['Option 1', 'Option 2']);
    await expect(page.locator('#dropdown > option')).toHaveText(["Please select\n            an option", 'Option 1', 'Option 2']);


})