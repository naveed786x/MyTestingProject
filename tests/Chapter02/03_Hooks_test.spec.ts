import { test, expect, Locator } from '@playwright/test';

test.beforeAll('Before runnig the complete script',async()=>{

    console.log('Console message - Before runnig the complete script');
})

test.beforeEach('Before runnig the Test script 1',async({page})=>{

    console.log('Console message - Before runnig the Test case');
    await page.goto('https://www.saucedemo.com/');
})

test.afterEach('After runnig the complete script',async()=>{

    console.log('Console message - After runnig the test case');
})

test.afterAll('After runnig the complete script',async()=>{

    console.log('Console message - After runnig the complete script');
})


test('My First Login', async ({ page }) => {

    //console.log('In First test case');
    //await page.goto('https://www.saucedemo.com/');

    const username: Locator = page.locator('#user-name');
    //await expect(username).toBeVisible();
    await username.fill('standard_user');

    const lastname: Locator = page.locator('#password');
    //await expect(lastname).toBeVisible();
    await lastname.fill('secret_sauce');

    const submit: Locator = page.locator('#login-button');
    //await expect(submit).toBeVisible();
    await submit.click();
});

test('My Second Login', async ({ page }) => {

    //console.log('In Second test case');
    //await page.goto('https://www.saucedemo.com/');

    const username: Locator = page.locator('#user-name');
    //await expect(username).toBeVisible();
    await username.fill('standard_user');

    const lastname: Locator = page.locator('#password');
    //await expect(lastname).toBeVisible();
    await lastname.fill('secret_sauce');

    const submit: Locator = page.locator('#login-button');
    //await expect(submit).toBeVisible();
    await submit.click();
});




