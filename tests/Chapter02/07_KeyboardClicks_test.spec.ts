import {test, expect, Locator} from '@playwright/test'

test('Keyboard Actions',async({page})=>{

    //Navigating to the youtube page
    await page.goto('https://practicetestautomation.com/');

    await page.getByTitle('Email Address').click();
    await page.getByTitle('Email Address').fill('Naveed Ahmed Khan');
    await page.getByTitle('Email Address').press('Enter');
    //await expect(page.getByText('The This value should be a valid email..'));

    await page.waitForTimeout(3000);

    await page.getByTitle('Email Address').dblclick();
    //await page.getByTitle('Email Address').press('Control+A'); //This will also work
    await page.keyboard.press('Control+A');
    //await page.getByTitle('Email Address').press('Delete');
    await page.keyboard.press('Delete');

    //Tab click

    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')

})