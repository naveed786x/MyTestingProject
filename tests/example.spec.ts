import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  //Click on doc link
  await page.getByRole('link', { name: 'API', exact: true }).click();
  
  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('Playwright module provides a')).toBeVisible();
});


// import {test,expect} from "@playwright/test";

// test('My Title Test',async ({page})=>{

//   await page.goto('https://practicetestautomation.com/');

//   let tile1:string=await page.title();
//   console.log("Title of the page is : "+tile1);
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle("Practice Test Automation | Learn Selenium WebDriver");

// })

// test('My URL Test',async ({page})=>{

//   await page.goto('https://practicetestautomation.com/');

//   let url1:string=await page.url();
//   console.log("url of the page is : "+url1);
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveURL("https://practicetestautomation.com/");

// })

// import {test,expect,Locator} from '@playwright/test'

// test('Verify Login',async({page})=>{

// await page.goto('https://www.saucedemo.com/');

// const username:Locator = page.locator('#user-name');
// //await expect(username).toBeVisible();
// await username.fill('standard_user');

// const lastname:Locator = page.locator('#password');
// //await expect(lastname).toBeVisible();
// await lastname.fill('secret_sauce');

// const submit:Locator = page.locator('#login-button');
// //await expect(submit).toBeVisible();
// await submit.click();

// await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

// //await expect(page.getByTitle('Products')).toBeVisible();
// // const spanElement = page.locator('span:has-text("Products")');
// // await expect(spanElement).toBeVisible();

// const title:Locator = page.locator('.title');
// await expect(title).toHaveText(/Products/);
// })

