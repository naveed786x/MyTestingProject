import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navigating to the github link',async()=>{
await page.goto('https://github.com/');
   page.getByRole('link', { name: 'Sign in' }).click();
    
  })
  await test.step('Entering UserName and PW in github', async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('naveed786x@gmail.com');
    await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Nellore@786');

  })
  await test.step('Clicking on Sign in link',async()=>{

    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })
  await test.step('Validating if we are inside github',async()=>{
await expect(page.getByTestId('top-nav-center').getByRole('link')).toContainText('Dashboard');
    
  })
  
  
  
  
});