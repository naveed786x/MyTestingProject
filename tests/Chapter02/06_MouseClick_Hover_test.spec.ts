import {test, expect, Locator} from '@playwright/test'

test('Verify Locators',async({page})=>{

    //Navigating to the youtube page
    await page.goto('https://jqueryui.com/droppable/');

    //Mouse left Click 
    await page.getByRole('link', {name:'Download'}).click({button:'left'})

    //Mouse left Click 
    await page.getByRole('link', {name:'API Documentation'}).click({button:'left'})

    //Mouse Right Click 
    await page.getByRole('link', {name:'Themes'}).first().click({button:'right'})

    //Double Click 
    await page.getByRole('link', {name:'Development'}).dblclick();


    //Hover over
    await page.getByTitle('QUnit').hover();
    const hoverValue = await page.getByTitle('QUnit').textContent();
    console.log("Hovered over QUnit: " + hoverValue)
})