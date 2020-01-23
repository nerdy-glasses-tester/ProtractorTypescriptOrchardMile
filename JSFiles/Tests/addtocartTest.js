"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const categoryPg_1 = require("../PageObjects/categoryPg");
const productDetailsPg_1 = require("../PageObjects/productDetailsPg");
const mybagPg_1 = require("../PageObjects/mybagPg");
describe('Orchard Mile Add to Cart Test', () => {
    it('Validate you can add a product to cart', () => __awaiter(void 0, void 0, void 0, function* () {
        let category = new categoryPg_1.categoryPg();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.actions().mouseMove(category.accessoriesCategory).perform();
        yield category.keychainsSubCategoryLink.click();
        yield protractor_1.browser.sleep(3000);
        let productimages = category.productImages;
        yield productimages.get(1).click();
        let productdetails = new productDetailsPg_1.productDetailsPg();
        let brand = "";
        let product = "";
        let price = "";
        let qty = 1;
        yield productdetails.productBrand.getText().then(function (text) {
            brand = text.toUpperCase();
            console.log(text);
        });
        yield productdetails.productName.getAttribute("innerHTML").then(function (text) {
            product = text;
            console.log(text);
        });
        yield productdetails.productPrice.getText().then(function (text) {
            price = text;
            console.log(text);
        });
        yield productdetails.addtobag.click();
        yield protractor_1.browser.sleep(2000);
        let mybag = new mybagPg_1.mybagPg();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.mybagHeader), 5000);
        yield mybag.mybagHeader.getText().then(function (text) {
            if (text === "My Bag") {
                console.log("Verified on My Bag page.");
            }
            else {
                console.log("Not on My Bag page.");
            }
        });
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productBrand), 5000);
        yield mybag.productBrand.getText().then(function (text) {
            if (text === brand) {
                console.log("Text is " + text + " Brand is " + brand);
                console.log("Verified brand.");
            }
            else {
                console.log("Text is " + text + " Brand is " + brand);
                console.log("Failed to verify brand.");
            }
        });
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productName), 5000);
        yield mybag.productName.getAttribute("innerHTML").then(function (text) {
            if (text === product) {
                console.log("Text is " + text + " Product is " + product);
                console.log("Verified product.");
            }
            else {
                console.log("Text is " + text + " Product is " + product);
                console.log("Failed to verify product.");
            }
        });
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productPrice), 5000);
        yield mybag.productPrice.getAttribute("innerText").then(function (text) {
            if (text.replace("$", "") === price) {
                console.log("Text is " + text + " Price is " + price);
                console.log("Verified price.");
            }
            else {
                console.log("Text is " + text + " Price is " + price);
                console.log("Failed to verify price.");
            }
        });
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.qty.first()), 5000);
        yield mybag.qty.first().getAttribute("innerHTML").then(function (text) {
            if (Number(text) === qty) {
                console.log("Text is " + text + " Qty is " + qty);
                console.log("Verified qty.");
            }
            else {
                console.log("Text is " + text + " Qty is " + qty);
                console.log("Failed to verify qty.");
            }
        });
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.subtotal), 5000);
        yield mybag.subtotal.getAttribute("innerText").then(function (text) {
            let pricenum = Number(price.replace('$', ''));
            let subtotal = pricenum * qty;
            let cartsubtotal = Number(text.replace('Sub Total: $', ''));
            if (cartsubtotal === subtotal) {
                console.log("cartsubtotal is " + cartsubtotal + " subtotal is " + subtotal);
                console.log("Subtotal verified.");
            }
            else {
                console.log("cartsubtotal is " + cartsubtotal + " subtotal is " + subtotal);
                console.log("Subtotal is not verified.");
            }
        });
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
        yield console.log("Element is present.");
        yield protractor_1.browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
        yield protractor_1.browser.sleep(3000);
        yield console.log("Clicked remove product");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkdG9jYXJ0VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RzL2FkZHRvY2FydFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0U7QUFDcEUsMERBQXVEO0FBQ3ZELHNFQUFtRTtBQUNuRSxvREFBaUQ7QUFFakQsUUFBUSxDQUFDLCtCQUErQixFQUFFLEdBQUUsRUFBRTtJQUMxQyxFQUFFLENBQUMsd0NBQXdDLEVBQUUsR0FBTyxFQUFFO1FBQ2xELElBQUksUUFBUSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxRSxNQUFNLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDM0MsTUFBTSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5DLElBQUksY0FBYyxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLE9BQU8sR0FBRSxFQUFFLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osTUFBTSxjQUFjLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDMUQsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUs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