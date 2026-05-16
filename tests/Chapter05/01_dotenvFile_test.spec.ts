import { test, expect } from '@playwright/test'

test('Test Case 123 ', async ({ page }) => {
    //Navigate to URL
    await page.goto(`${process.env.URL}`); 

    const txt =await page.locator('[class="entry-title"]').textContent();
    //const finaltext = txt?.trim();
    console.log('text value is :', txt?.trim())
    expect(txt).toBe('jQuery UI Demos');

    const txt1 =await page.locator('[class="entry-title"]').innerText();
    //const finaltext = txt?.trim();
    console.log('text value is of 2 is :', txt1?.trim())
    expect(txt1).toBe('jQuery UI Demos');

    const label = await page.getByLabel('Search jQuery UI').getAttribute('autocomplete');
    console.log('Label value is :', label);    
})

