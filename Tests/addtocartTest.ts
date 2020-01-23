import {browser, element, by, ExpectedConditions} from "protractor";
import { categoryPg } from "../PageObjects/categoryPg";
import { productDetailsPg } from "../PageObjects/productDetailsPg";
import { mybagPg } from "../PageObjects/mybagPg";

describe('Orchard Mile Add to Cart Test', ()=> {
    it('Validate you can add a product to cart', async()=> {
        let category = new categoryPg();
        await browser.sleep(3000);
        await browser.actions().mouseMove(category.accessoriesCategory).perform();
        await category.keychainsSubCategoryLink.click();
        await browser.sleep(3000);

        let productimages = category.productImages;
        await productimages.get(1).click();

        let productdetails = new productDetailsPg();
        let brand = "";
        let product= "";
        let price = "";
        let qty = 1;
        await productdetails.productBrand.getText().then(function(text){
            brand = text.toUpperCase();
            console.log(text);
        })

        await productdetails.productName.getAttribute("innerHTML").then(function(text){
            product = text;
            console.log(text);
        });

        await productdetails.productPrice.getText().then(function(text){
            price = text;
            console.log(text);
        });

        await productdetails.addtobag.click();
        await browser.sleep(2000);

        let mybag = new mybagPg();

        await browser.wait(ExpectedConditions.presenceOf(mybag.mybagHeader), 5000);
        await mybag.mybagHeader.getText().then(function(text){
            if(text==="My Bag")
            {
                console.log("Verified on My Bag page.");
            }
            else
            {
                console.log("Not on My Bag page.");
            }
        });

        await browser.wait(ExpectedConditions.presenceOf(mybag.productBrand), 5000);
        await mybag.productBrand.getText().then(function(text){
            if(text===brand)
            {
                console.log("Text is "+text+" Brand is "+brand);
                console.log("Verified brand.");
            }
            else
            {
                console.log("Text is "+text+" Brand is "+brand);
                console.log("Failed to verify brand.");
            }
        });

        await browser.wait(ExpectedConditions.presenceOf(mybag.productName), 5000);
        await mybag.productName.getAttribute("innerHTML").then(function(text){
            if(text===product)
            {
                console.log("Text is "+text+" Product is "+product);
                console.log("Verified product.");
            }
            else
            {
                console.log("Text is "+text+" Product is "+product);
                console.log("Failed to verify product.");
            }
        });

        await browser.wait(ExpectedConditions.presenceOf(mybag.productPrice), 5000);
        await mybag.productPrice.getAttribute("innerText").then(function(text){
            if(text.replace("$", "")===price)
            {
                console.log("Text is "+text+" Price is "+price);
                console.log("Verified price.");
            }
            else
            {
                console.log("Text is "+text+" Price is "+price);
                console.log("Failed to verify price.");
            }
        });

        await browser.wait(ExpectedConditions.presenceOf(mybag.qty.first()), 5000);
        await mybag.qty.first().getAttribute("innerHTML").then(function(text){
            if(Number(text)===qty)
            {
                console.log("Text is "+text+" Qty is "+qty);
                console.log("Verified qty.");
            }
            else
            {
                console.log("Text is "+text+" Qty is "+qty);
                console.log("Failed to verify qty.");
            }
        });

        await browser.wait(ExpectedConditions.presenceOf(mybag.subtotal), 5000);
        await mybag.subtotal.getAttribute("innerText").then(function(text){
            let pricenum = Number(price.replace('$',''));
            let subtotal = pricenum * qty;

            let cartsubtotal = Number(text.replace('Sub Total: $', ''));
            if(cartsubtotal===subtotal)
            {
                console.log("cartsubtotal is "+cartsubtotal+" subtotal is "+subtotal);
                console.log("Subtotal verified.");
            }
            else
            {
                console.log("cartsubtotal is "+cartsubtotal+" subtotal is "+subtotal);
                console.log("Subtotal is not verified.");
            }
        });

        await browser.wait(ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
        await console.log("Element is present.");
        await browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
        await browser.sleep(3000);
        await console.log("Clicked remove product");

    });
});