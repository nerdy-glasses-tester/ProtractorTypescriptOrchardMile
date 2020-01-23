import {browser, element, by, ExpectedConditions} from "protractor";
import { categoryPg } from "../PageObjects/categoryPg";

describe('Orchard Mile Filter By Criteria Test', ()=> {
    it('Validate you can filter by criteria', async()=> {
        let category = new categoryPg();
        await browser.sleep(3000);
        await browser.actions().mouseMove(category.beautyCategory).perform();
        await category.makeupLink.click();
        await browser.sleep(3000);

        await browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        await browser.actions().mouseMove(category.leftmenuConcealerCheckbox).perform();
        await category.leftmenuConcealerCheckbox.click();
        await browser.sleep(3000);

        await browser.executeScript('window.scrollTo(10000, 12000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        let designerheader = category.leftmenuDesignersHeaderLink;
        let length1 = await designerheader.count();
        console.log("Length1 is: "+Number(length1));

        for(let i=0; i<length1; i++)
        {
            if(i===2)
            {
                await browser.actions().mouseMove(category.leftmenuDesignersHeaderLink.get(i)).perform();
                await browser.wait(ExpectedConditions.elementToBeClickable(category.leftmenuDesignersHeaderLink.get(i)), 5000);
                await category.leftmenuDesignersHeaderLink.get(i).click();
                console.log("Clicked designer");
                await browser.sleep(3000);
            }

        }

        let cliniquedesigner = category.leftmenuDesignerCliniqueLink;
        let length2 = await cliniquedesigner.count();
        console.log("Length2 is : "+Number(length2));
        for(let i=0; i<length2; i++)
        {
            if(i===1)
            {
                await browser.actions().mouseMove(cliniquedesigner.get(i)).perform();
                await browser.wait(ExpectedConditions.elementToBeClickable(cliniquedesigner.get(i)), 5000);
                await cliniquedesigner.get(i).click();
                console.log("Clicked Clinique");
                await browser.sleep(3000);
            }

        }


        let brands = category.productbrand;
        let size1 = brands.length;
        for(let i=0; i<size1; i++)
        {
            await brands.get(i).getText().then(function(text){
                if(text.includes("Clinique"))
                {
                    console.log("Brand matches.");
                }
                else
                {
                    console.log("Brand doesn't matches.");
                }
            });
        }

        let products = category.productname;
        let size2 = products.length;
        for(let i=0; i<size1; i++)
        {
            await products.get(i).getText().then(function(text){
                if(text.includes("Concealer"))
                {
                    console.log("Product matches.");
                }
                else
                {
                    console.log("Product doesn't matches.");
                }
            });
        }


    });
});