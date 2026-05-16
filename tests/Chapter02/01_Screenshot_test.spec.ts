import {test, expect} from '@playwright/test'

test('Verify the screenshots', async({page})=>{

    //Navigating to the youtube page
    await test.step('Navigate to the link',async()=>{
        page.goto('https://www.youtube.com/@testerstalk');
    })

    //Capturing the screenshot of a particular element
    await test.step('Screenshot of a web element',async()=>{
        await page.locator('#page-header-container').screenshot({path:'./tests/Screenshots/ElementScreenshot.png'});
    })

    //Capturing the page

    await test.step('Screenshot of a current page',async()=>{
        await page.screenshot({path:'./tests/Screenshots/PageScreenshot.png'});
    })

    //Capturing complete page

    await test.step('Screenshot of a full web page',async()=>{
        await page.screenshot({path:'./tests/Screenshots/FullPageScreenshot.png',fullPage:true});
    })

})