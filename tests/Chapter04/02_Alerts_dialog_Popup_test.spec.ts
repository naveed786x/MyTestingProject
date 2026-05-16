import { test, expect } from '@playwright/test'

test('Alert Popup dailog', async ({ page }) => {

    //Navigate to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog',dialog =>{
        dialog.accept();
        console.log(`Alert Message is : ${dialog.message()}`)
        //dialog.dismiss();
    })

    await page.getByText('See an example alert',{exact :true}).click();

})
