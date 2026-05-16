import {test, expect, Locator} from '@playwright/test'

test('Verify Locators',async({page})=>{

    //Navigating to the youtube page
    await test.step('Navigate to the link',async()=>{
        page.goto('https://practice.expandtesting.com/locators#google_vignette');
        await page.waitForTimeout(3000);
    })

    test.step('getByAltText',async()=>{       
        //await page.getByAltText('User avatar').click();

        page.goto('https://practicetestautomation.com/');
        const avar: Locator = page.getByAltText("Dmitry Shyshkin, your Selenium WebDriver instructor")
        console.log('value of avar is :',avar)
        await expect(avar).toBeVisible();

    })

    test.step('getByText',async()=>{       
        await page.getByText('Locators Test page for Automation Testing').click();
    })

    test.step('getByRole',async()=>{       
        await page.getByRole('link', {name : 'Contact'}).click();
    })

    test.step('getByLabel',async()=>{       
        await page.getByLabel('Choose a country').click();
    })

    test.step('getByPlaceHolder',async()=>{       
        await page.getByPlaceholder('Search the site').click();
    })

    test.step('getByTitle',async()=>{       
        await page.getByTitle('Refresh content').click();
    })

    // test.step('getByTestId',async()=>{       
    //     await page.getByTestId('').click();
    // })


})


