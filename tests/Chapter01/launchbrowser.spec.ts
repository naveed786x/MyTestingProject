import {test, expect} from '@playwright/test'

// test('Verity Title',async({page})=>{

//     //Navigate to URL
//     await page.goto('https://www.youtube.com/');

//     //click on search box

//     await page.getByRole('combobox', { name: 'Search' }).click();
//     await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
//     await page.getByRole('combobox', { name: 'Search' }).press('Enter');

//     //Validate title
//     await expect(page).toHaveTitle(/playwright/);

//     //Click on Series link
//     await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

//     //Validate first two chaptors


//     await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
// })

test('Verity Title',async({page})=>{
await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testertalk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByRole('link', { name: 'Testers Talk @testerstalk•29.' }).click();
  await page.locator('#icon-button').getByRole('button', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('typescript');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Learn Playwright with TypeScript✅' }).click();
await page.waitForTimeout(3000);
  await expect(page.getByRole('link', { name: '#1 Playwright Automation' })).toBeVisible();
  await expect(page.getByRole('link', { name: '2 #2 Advanced Playwright' })).toBeVisible();
  await expect(page.locator('#playlist')).toContainText('#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial');
  await expect(page.locator('#playlist')).toContainText('#2 Advanced Playwright TypeScript Tutorial Full Course 2025 | Playwright Automation Tutorial');



})


