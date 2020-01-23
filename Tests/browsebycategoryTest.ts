import {browser, element, by} from "protractor";
import { categoryPg } from "../PageObjects/categoryPg";

describe('Orchard Mile Browse By Category Test', ()=> {
    it('Validate you can browse by category', async()=> {

       let category = new categoryPg();
       await browser.sleep(3000);
       await browser.actions().mouseMove(category.shoesCategory).perform();
       await category.sandalsSubCategory.click();
       await browser.sleep(3000);

       await category.pageCategoryHeader.getText().then(function(text){
            console.log(text);
            if(text.includes("SANDALS"))
            {
                console.log("Page category header passes.");
            }
            else
            {
                console.log("Page category header fails.");
            }
       });

    await category.leftmenuCategoryHeader.getText().then(function(text){
        if(text.includes("Shoes"))
        {
            console.log("Left menu category header passes.")
        }
        else
        {
            console.log("Left menu category header fails.")
        }
    });  

    await category.leftmenuSubCategoryHeader.getText().then(function(text){
        if(text.includes("Sandals"))
        {
            console.log("Left menu subcategory header passes.")
        }
        else
        {
            console.log("Left menu subcategory header fails.")
        }
    });
  
    let products = category.productname;
    let size = await products.length;
    for(let i=0; i<size; i++)
    {
        products.get(i).getText().then(function(text){
            if(text.includes("Sandals"))
            {
                console.log("Product name passes.");
            }
            else
            {
                console.log("Product name fails.");
            }
        });
    }

    });
});