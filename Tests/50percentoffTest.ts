import {browser, element, by} from "protractor";
import { categoryPg } from "../PageObjects/categoryPg";

describe('Orchard Mile 50 Percent Off Test', ()=> {
    it('Validate products returned are really 50 percent off or more', async()=> {
        let category = new categoryPg();
        await browser.sleep(3000);
        await category.salesCategory.click();
        await browser.sleep(3000);
        await browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        await browser.sleep(3000);
        let fiftyoff = category.fiftypercentoffLink;
        await category.fiftypercentoffLink.get(1).click();
        await browser.sleep(3000);

        let originalprices = category.originalPrice;
        let discountprices = category.discountPrice;
        let size1 = await originalprices.count();
        let discount = .50

        //if discountprice is less than or equal to calculatedprice then it is a pass
        for(let i=0; i<size1; i++)
        {
            let originalp = Number((await (await originalprices.get(i).getText()).replace('$','').replace(',','')));
            await console.log(originalp);
            let calculateddiscountp = Math.round(originalp*.50);
            await console.log(calculateddiscountp);
            let websitediscountp = Number(await (await discountprices.get(i).getText()).replace('$', '').replace(',',''));
            await console.log(websitediscountp);

            if(await !(websitediscountp<=calculateddiscountp))
            {
                await console.log("Fail");
                break;
            }
            else
            {
                await console.log("WebsiteDiscountPrice: "+websitediscountp+" is less than equal to CalculatedDiscountPrice: "+calculateddiscountp);
            }
        }

        await console.log("Pass");

    });
});