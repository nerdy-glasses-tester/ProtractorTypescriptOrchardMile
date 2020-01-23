import {browser, element, by} from "protractor";
import { categoryPg } from "../PageObjects/categoryPg";

describe('Orchard Mile Browse By Designer Test', ()=> {
    it('Validate you can browse by designer', async()=> {
        let category = new categoryPg();
        await browser.sleep(3000);
        await browser.actions().mouseMove(category.designersCategory).perform();
        await category.viewAll.click();
        await category.YLink.click();
        await category.YumiKimLink.click();
        await browser.sleep(3000);

        let designerHeaders = category.designerCategoryHeader;
        let size1 = designerHeaders.length;
        for(let i=0; i<size1; i++)
        {
            await category.designerCategoryHeader.get(i).getText().then(function(text){
                console.log(text);
                if(text.includes("Yumi Kim"))
                {
                    console.log("Header contains designer name.")
                }
                else
                {
                    console.log("Header does not contain designer name.")
                }
            });
    
        }
      

        let brands = category.productbrand;
        let size2 = brands.length;
        for(let i=0; i<size2; i++)
        {
            await brands.get(i).getText().then(function(text){
                if(text.includes("Yumi Kim"))
                {
                    console.log("Brand contains designer name.")
                }
                else
                {
                    console.log("Brand does not contain designer name.")
                }
            });
        }


    });
});