import {test, expect, Locator} from '@playwright/test'

test('Verify Locators',async({page})=>{

    //Navigating to the youtube page
    await page.goto('https://jqueryui.com/droppable/');

    const iframe = page.frameLocator('[class="demo-frame"]');  

    const drag = iframe.locator('[id="draggable"]');
    const drop = iframe.locator('[id="droppable"]');
    await drag.dragTo(drop);

})