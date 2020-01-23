import {browser, element, by, protractor, ExpectedConditions} from "protractor";
import { searchHomePg } from "../PageObjects/searchHomePg";
import { categoryPg } from "../PageObjects/categoryPg";


describe('Orchard Mile Search Test', ()=> {
    it('Validate you can search for wallet', async()=> {

        let search = new searchHomePg();
        await browser.sleep(3000);
        await search.searchBox.click();
        await search.searchBox.clear().then(async()=> {
            await search.searchBox.sendKeys("wallet");
        });
        //await search.searchBox.sendKeys(protractor.Key.ENTER);
        await browser.sleep(2000);
        await browser.actions().mouseMove(search.viewMoreResults).perform();
        await browser.wait(ExpectedConditions.elementToBeClickable(search.viewMoreResults), 5000);
        await search.viewMoreResults.click();
        //await browser.executeScript("arguments[0].click();", search.viewMoreResults);
        await browser.sleep(2000);

        let category = new categoryPg();
        let products = category.productname;
        let size = await products.length;

        for (let i=0; i<size; i++)
        {
            await products.get(i).getText().then(function(text){
                console.log(text);
                if(text.includes("Wallet"))
                {
                    console.log("Pass");
                }
                else
                {
                    console.log("Fail");
                }
            });
        }
   
    });
});