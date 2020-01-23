import {browser, element, by, ExpectedConditions} from "protractor";
import { categoryPg } from "../PageObjects/categoryPg";
import { productDetailsPg } from "../PageObjects/productDetailsPg";
import { mybagPg } from "../PageObjects/mybagPg";
import chai from "chai";

var assert = chai.assert;
var expect = chai.expect;

describe('Orchard Mile Remove from Cart Test', ()=> {
    it('Validate you can remove a product from cart', async()=> {
        let category = new categoryPg();
        await browser.sleep(3000);
        await browser.actions().mouseMove(category.accessoriesCategory).perform();
        await category.keychainsSubCategoryLink.click();
        await browser.sleep(2000);

        let productimages = category.productImages;
        await productimages.get(1).click();
        let productdetails = new productDetailsPg();
        await productdetails.addtobag.click();
        await browser.sleep(2000);
        await category.beautyCategory.click();
        await browser.actions().mouseMove(category.beautyCategory).perform();
        await category.haircareLink.click();
        await browser.sleep(2000);

        productimages = category.productImages;
        await productimages.get(0).click();

        //productdetails.sizeDrpDownOption1.click();
        //await browser.sleep(2000);

        await productdetails.addtobag.click();
        await browser.sleep(2000);
        
        let mybag = new mybagPg();
  
        await browser.wait(ExpectedConditions.visibilityOf(mybag.mybag), 5000);
        await browser.wait(ExpectedConditions.presenceOf(mybag.mybagHeader), 5000);
        await mybag.mybagHeader.getText().then(function(text){
            expect(text).to.equal("My Bag");
        });

        let itemsbeforeremoval = 0;
        await browser.wait(ExpectedConditions.presenceOf(mybag.numberofitems), 5000);
        await mybag.numberofitems.getAttribute("innerHTML").then(async function(text){
            itemsbeforeremoval=Number(text.replace(" items", ""));
            await console.log("itemsbeforeremoval is "+itemsbeforeremoval);
        });

        let removeproduct = "";
        await browser.wait(ExpectedConditions.presenceOf(mybag.productNameMultiple.get(0)), 5000);
        await mybag.productNameMultiple.get(0).getAttribute("innerHTML").then(function(text){
            removeproduct=text;
        });

        let removeprice = 0;
        await browser.wait(ExpectedConditions.presenceOf(mybag.productPriceMultiple.get(0)), 5000);
        await mybag.productPriceMultiple.get(0).getAttribute("innerText").then(function(text){
            removeprice = Number(text.replace("$", ""));
        });

        let subtotalbeforeproductremoval = 0;
        await browser.wait(ExpectedConditions.presenceOf(mybag.subtotal), 5000);
        await mybag.subtotal.getAttribute("innerText").then(function(text){
            subtotalbeforeproductremoval = Number(text.replace('Sub Total: $', ''));
        });
    

        /***        
        let x1 = await (await mybag.remove1stProductBtn.getLocation()).x;
        console.log("x: "+x1);
        let y1 = await (await mybag.remove1stProductBtn.getLocation()).y;
        console.log("y: "+y1);
        browser.actions().mouseMove({x: x1, y : y1}).click().perform();
        await browser.executeScript('arguments[0].scrollIntoView();', mybag.remove1stProductBtn);
        await browser.executeScript("arguments[0].dblclick;", mybag.remove1stProductBtn);
        ***/

        await browser.wait(ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
        await console.log("Element is present.");
        await browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
        await browser.sleep(3000);
        await console.log("Clicked remove product");
        await browser.wait(ExpectedConditions.elementToBeClickable(productdetails.mybagcart), 10000);
        await productdetails.mybagcart.click();
        await browser.sleep(7000);

        
        let afterremoveproductfirstproductis = "";
        await mybag.productNameMultiple.get(0).getAttribute("innerHTML").then(function(text){
            afterremoveproductfirstproductis=text;
            assert.notEqual(removeproduct, afterremoveproductfirstproductis, "Removed first product: "+removeproduct+" After removing 1st product the first product is: "+afterremoveproductfirstproductis+" ;Failed to verify the first item is different after removing a product from cart.");
        });

    
        let itemsafterremoval = 0;
        await browser.wait(ExpectedConditions.presenceOf(mybag.numberofitems), 5000);
        await mybag.numberofitems.getText().then(async function(text){
            itemsafterremoval = Number(text.replace(" item", ""));
            expect(itemsafterremoval).to.equal(itemsbeforeremoval-1);
            console.log("itemsafterremoval is "+itemsafterremoval+" itemsbeforeremoval is "+itemsbeforeremoval);
        });



        let subtotalafterproductremoval = 0;
        await browser.wait(ExpectedConditions.presenceOf(mybag.subtotal), 5000);
        await mybag.subtotal.getAttribute("innerText").then(async function(text){
            subtotalafterproductremoval = Number(text.replace('Sub Total: $', ''));
            expect(subtotalafterproductremoval).to.equal(subtotalbeforeproductremoval-removeprice);
            console.log("subtotalafterproductremoval is "+subtotalafterproductremoval+" subtotalbeforeproductremoval is "+subtotalbeforeproductremoval);
        });


        await browser.wait(ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
        await console.log("Element is present.");
        await browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
        await browser.sleep(3000);
        await console.log("Clicked remove product");
        await browser.wait(ExpectedConditions.presenceOf(mybag.closebtn), 10000);
        await mybag.closebtn.click();
        await browser.sleep(2000);
     
        
    });
});