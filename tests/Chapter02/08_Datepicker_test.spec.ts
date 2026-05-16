import {test, expect, Locator} from '@playwright/test'

test('Keyboard Actions',async({page})=>{

    //Navigating to the youtube page
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe = page.frameLocator('[class="demo-frame"]');

    await iframe.locator('[id="datepicker"]').click()
    await iframe.locator('[id="datepicker"]').fill('12/01/2024');


    
})