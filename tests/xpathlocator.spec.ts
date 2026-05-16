import {test,expect,Locator} from '@playwright/test'

test('Verify xpath locators',async({page})=>{

await page.goto('https://demowebshop.tricentis.com/');

//Absolute xpath
const absxpath:Locator=page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
await expect(absxpath).toBeVisible();

//Relative xpath
const relxpath:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(relxpath).toBeVisible();

//Contains xpath

const products:Locator=page.locator("//h2//a[contains(@href,'computer')]");
const productCout:number=await products.count();
console.log("Total no of computer products are :",productCout);

//console.log("Computer names are ",await products.textContent()); //strict mode violation bcoz textContent is for single element
console.log("First Computer names is ",await products.first().textContent()); 
console.log("First Computer names is ",await products.last().textContent()); 
console.log("First Computer names is ",await products.nth(2).textContent()); 

const allComputers:string[] =await products.allTextContents();

for (const comps of allComputers)
{
    console.log("Computer names is: ",comps);
}

})