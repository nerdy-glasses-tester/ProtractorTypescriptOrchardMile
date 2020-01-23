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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const categoryPg_1 = require("../PageObjects/categoryPg");
const productDetailsPg_1 = require("../PageObjects/productDetailsPg");
const mybagPg_1 = require("../PageObjects/mybagPg");
const chai_1 = __importDefault(require("chai"));
var assert = chai_1.default.assert;
var expect = chai_1.default.expect;
describe('Orchard Mile Remove from Cart Test', () => {
    it('Validate you can remove a product from cart', () => __awaiter(void 0, void 0, void 0, function* () {
        let category = new categoryPg_1.categoryPg();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.actions().mouseMove(category.accessoriesCategory).perform();
        yield category.keychainsSubCategoryLink.click();
        yield protractor_1.browser.sleep(2000);
        let productimages = category.productImages;
        yield productimages.get(1).click();
        let productdetails = new productDetailsPg_1.productDetailsPg();
        yield productdetails.addtobag.click();
        yield protractor_1.browser.sleep(2000);
        yield category.beautyCategory.click();
        yield protractor_1.browser.actions().mouseMove(category.beautyCategory).perform();
        yield category.haircareLink.click();
        yield protractor_1.browser.sleep(2000);
        productimages = category.productImages;
        yield productimages.get(0).click();
        //productdetails.sizeDrpDownOption1.click();
        //await browser.sleep(2000);
        yield productdetails.addtobag.click();
        yield protractor_1.browser.sleep(2000);
        let mybag = new mybagPg_1.mybagPg();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(mybag.mybag), 5000);
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.mybagHeader), 5000);
        yield mybag.mybagHeader.getText().then(function (text) {
            expect(text).to.equal("My Bag");
        });
        let itemsbeforeremoval = 0;
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.numberofitems), 5000);
        yield mybag.numberofitems.getAttribute("innerHTML").then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                itemsbeforeremoval = Number(text.replace(" items", ""));
                yield console.log("itemsbeforeremoval is " + itemsbeforeremoval);
            });
        });
        let removeproduct = "";
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productNameMultiple.get(0)), 5000);
        yield mybag.productNameMultiple.get(0).getAttribute("innerHTML").then(function (text) {
            removeproduct = text;
        });
        let removeprice = 0;
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productPriceMultiple.get(0)), 5000);
        yield mybag.productPriceMultiple.get(0).getAttribute("innerText").then(function (text) {
            removeprice = Number(text.replace("$", ""));
        });
        let subtotalbeforeproductremoval = 0;
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.subtotal), 5000);
        yield mybag.subtotal.getAttribute("innerText").then(function (text) {
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
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
        yield console.log("Element is present.");
        yield protractor_1.browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
        yield protractor_1.browser.sleep(3000);
        yield console.log("Clicked remove product");
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(productdetails.mybagcart), 10000);
        yield productdetails.mybagcart.click();
        yield protractor_1.browser.sleep(7000);
        let afterremoveproductfirstproductis = "";
        yield mybag.productNameMultiple.get(0).getAttribute("innerHTML").then(function (text) {
            afterremoveproductfirstproductis = text;
            assert.notEqual(removeproduct, afterremoveproductfirstproductis, "Removed first product: " + removeproduct + " After removing 1st product the first product is: " + afterremoveproductfirstproductis + " ;Failed to verify the first item is different after removing a product from cart.");
        });
        let itemsafterremoval = 0;
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.numberofitems), 5000);
        yield mybag.numberofitems.getText().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                itemsafterremoval = Number(text.replace(" item", ""));
                expect(itemsafterremoval).to.equal(itemsbeforeremoval - 1);
                console.log("itemsafterremoval is " + itemsafterremoval + " itemsbeforeremoval is " + itemsbeforeremoval);
            });
        });
        let subtotalafterproductremoval = 0;
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.subtotal), 5000);
        yield mybag.subtotal.getAttribute("innerText").then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                subtotalafterproductremoval = Number(text.replace('Sub Total: $', ''));
                expect(subtotalafterproductremoval).to.equal(subtotalbeforeproductremoval - removeprice);
                console.log("subtotalafterproductremoval is " + subtotalafterproductremoval + " subtotalbeforeproductremoval is " + subtotalbeforeproductremoval);
            });
        });
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
        yield console.log("Element is present.");
        yield protractor_1.browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
        yield protractor_1.browser.sleep(3000);
        yield console.log("Clicked remove product");
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.closebtn), 10000);
        yield mybag.closebtn.click();
        yield protractor_1.browser.sleep(2000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlZnJvbWNhcnRUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdHMvcmVtb3ZlZnJvbWNhcnRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9FO0FBQ3BFLDBEQUF1RDtBQUN2RCxzRUFBbUU7QUFDbkUsb0RBQWlEO0FBQ2pELGdEQUF3QjtBQUV4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsUUFBUSxDQUFDLG9DQUFvQyxFQUFFLEdBQUUsRUFBRTtJQUMvQyxFQUFFLENBQUMsNkNBQTZDLEVBQUUsR0FBTyxFQUFFO1FBQ3ZELElBQUksUUFBUSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxRSxNQUFNLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDM0MsTUFBTSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksY0FBYyxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLFFBQVEsQ0FBQyxj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