import{test,expect,Locator} from "@playwright/test";

test('Verify Pw Locator',async({page})=>{

    //1st Locator is getByAltText()
    //Used only for image elemet
    await page.goto("https://practicetestautomation.com/");

    const logo:Locator=page.getByAltText("Practice Test Automation");
    await expect(logo).toBeVisible();

    //2nd Locator getByText()

    /*const text:Locator=page.getByText("Welcome to our store");
    await expect(text).toBeVisible();*/

    //await expect(page.getByText("Welcome to our store")).toBeVisible();
    //await expect(page.getByText("our store")).toBeVisible();
    //await expect(page.getByText(/Welcome to/)).toBeVisible();
    //await expect(page.getByText(/Welcome To/)).toBeVisible();
    await expect(page.getByText("Hello")).toBeVisible();

    //3rd locator getByRole()
    await page.getByRole('link', { name: 'Practice', exact: true }).click();
    //await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Practice' })).toBeVisible();

    await page.getByRole('link', { name: 'Test Login Page',}).click();
    //await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();



    //4th getByLabel()

    await page.getByLabel('Username').fill("naveed")
    await page.getByLabel('Password').fill("khan")

})