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
const cucumber_1 = require("cucumber");
const searchHomePg_1 = require("../PageObjects/searchHomePg");
const categoryPg_1 = require("../PageObjects/categoryPg");
const mybagPg_1 = require("../PageObjects/mybagPg");
const productDetailsPg_1 = require("../PageObjects/productDetailsPg");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var assert = chai_1.default.assert;
var expect = chai_1.default.expect;
let search = new searchHomePg_1.searchHomePg();
let category1 = new categoryPg_1.categoryPg();
let productdetails = new productDetailsPg_1.productDetailsPg();
let mybag = new mybagPg_1.mybagPg();
let brand = "";
let product = "";
let price = "";
let qty = 1;
let itemsbeforeremoval = 0;
let removeproduct = "";
let removeprice = 0;
let subtotalbeforeproductremoval = 0;
let afterremoveproductfirstproductis = "";
let itemsafterremoval = 0;
let subtotalafterproductremoval = 0;
cucumber_1.Given('I will click search field', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield search.searchBox.click();
}));
cucumber_1.When('I enter {string}', (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    yield search.searchBox.clear().then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield search.searchBox.sendKeys(keyword);
    }));
    //await search.searchBox.sendKeys(string);
    //await search.searchBox.sendKeys(protractor.Key.ENTER);
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.actions().mouseMove(search.viewMoreResults).perform();
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(search.viewMoreResults), 5000);
    yield search.viewMoreResults.click();
    //await browser.executeScript("arguments[0].click();", search.viewMoreResults);
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('the search results returned will display {string} products', (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    let products = category1.productname;
    let size = yield products.length;
    for (let i = 0; i < size; i++) {
        yield products.get(i).getText().then(function (text) {
            assert.include(text, keyword, "results contains search keyword");
        });
    }
}));
cucumber_1.Given('I will hover over a category header to bring up the subcategories popup', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.browser.actions().mouseMove(category1.shoesCategory).perform();
}));
cucumber_1.When('I select a subcategory', () => __awaiter(void 0, void 0, void 0, function* () {
    yield category1.sandalsSubCategory.click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Then('the products displayed will show {string} name in the description text', (subcategory) => __awaiter(void 0, void 0, void 0, function* () {
    let products = category1.productname;
    let size = yield products.length;
    for (let i = 0; i < size; i++) {
        yield products.get(i).getText().then(function (text) {
            expect(text).to.include(subcategory);
        });
    }
}));
cucumber_1.Then('the left side menu will have the {string} and the {string} actively open', (category, subcategory) => __awaiter(void 0, void 0, void 0, function* () {
    yield category1.leftmenuCategoryHeader.getText().then(function (text) {
        console.log(text);
        expect(text).to.include(category);
    });
    yield category1.leftmenuSubCategoryHeader.getText().then(function (text) {
        console.log(text);
        expect(text).to.include(subcategory);
    });
}));
cucumber_1.Then('the results page displayed will show the {string} header', (subcategoryheader) => __awaiter(void 0, void 0, void 0, function* () {
    yield category1.pageCategoryHeader.getText().then(function (text) {
        console.log(text);
        expect(text).to.include(subcategoryheader);
    });
}));
cucumber_1.Given('I hover over the designers link and click on View All', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.browser.actions().mouseMove(category1.designersCategory).perform();
    yield category1.viewAll.click();
}));
cucumber_1.When('I click on Y link and the designer in the Y section', () => __awaiter(void 0, void 0, void 0, function* () {
    yield category1.YLink.click();
    yield category1.YumiKimLink.click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Then('the designer products displayed will show {string} name in the description text', (designer) => __awaiter(void 0, void 0, void 0, function* () {
    let designerHeaders = category1.designerCategoryHeader;
    let size1 = designerHeaders.length;
    for (let i = 0; i < size1; i++) {
        yield category1.designerCategoryHeader.get(i).getText().then(function (text) {
            console.log(text);
            expect(text).toBe(designer);
        });
    }
}));
cucumber_1.Then('the results page displayed will show the {string} in the header', (designer) => __awaiter(void 0, void 0, void 0, function* () {
    let brands = category1.productbrand;
    let size2 = yield brands.length;
    for (let i = 0; i < size2; i++) {
        yield brands.get(i).getText().then(function (text) {
            expect(text).toBe(designer);
        });
    }
}));
cucumber_1.Given('I hover over the beauty link and click on makeup link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.browser.actions().mouseMove(category1.beautyCategory).perform();
    yield category1.makeupLink.click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.When('I scrolled down and check concealer and check Clinique from designers section', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
        console.log('++++++SCROLLED Down+++++');
    });
    yield protractor_1.browser.actions().mouseMove(category1.leftmenuConcealerCheckbox).perform();
    yield category1.leftmenuConcealerCheckbox.click();
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.browser.executeScript('window.scrollTo(10000, 12000);').then(function () {
        console.log('++++++SCROLLED Down+++++');
    });
    let designerheader = category1.leftmenuDesignersHeaderLink;
    let length1 = yield designerheader.count();
    console.log("Length1 is: " + Number(length1));
    for (let i = 0; i < length1; i++) {
        if (i === 2) {
            yield protractor_1.browser.actions().mouseMove(category1.leftmenuDesignersHeaderLink.get(i)).perform();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(category1.leftmenuDesignersHeaderLink.get(i)), 5000);
            yield category1.leftmenuDesignersHeaderLink.get(i).click();
            console.log("Clicked designer");
            yield protractor_1.browser.sleep(3000);
        }
    }
    let cliniquedesigner = category1.leftmenuDesignerCliniqueLink;
    let length2 = yield cliniquedesigner.count();
    console.log("Length2 is : " + Number(length2));
    for (let i = 0; i < length2; i++) {
        if (i === 1) {
            yield protractor_1.browser.actions().mouseMove(cliniquedesigner.get(i)).perform();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(cliniquedesigner.get(i)), 5000);
            yield cliniquedesigner.get(i).click();
            console.log("Clicked Clinique");
            yield protractor_1.browser.sleep(3000);
        }
    }
}));
cucumber_1.Then('the makeup product results will filter to display {string} {string}', (brand, makeupcategory) => __awaiter(void 0, void 0, void 0, function* () {
    let brands = category1.productbrand;
    let size1 = brands.length;
    for (let i = 0; i < size1; i++) {
        yield brands.get(i).getText().then(function (text) {
            if (text.includes("Clinique")) {
                console.log("Brand matches.");
            }
            else {
                console.log("Brand doesn't matches.");
            }
        });
    }
    let products = category1.productname;
    let size2 = products.length;
    for (let i = 0; i < size1; i++) {
        yield products.get(i).getText().then(function (text) {
            if (text.includes("Concealer")) {
                console.log("Product matches.");
            }
            else {
                console.log("Product doesn't matches.");
            }
        });
    }
}));
cucumber_1.Given('I clicked on sales category', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield category1.salesCategory.click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.When('I scroll down and click on 50 percent off or more link to filter further', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
        console.log('++++++SCROLLED Down+++++');
    });
    yield protractor_1.browser.sleep(3000);
    let fiftyoff = category1.fiftypercentoffLink;
    yield category1.fiftypercentoffLink.get(1).click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Then('all products returned have prices that are 50 percent off or more', () => __awaiter(void 0, void 0, void 0, function* () {
    let originalprices = category1.originalPrice;
    let discountprices = category1.discountPrice;
    let size1 = yield originalprices.count();
    let discount = .50;
    //if discountprice is less than or equal to calculatedprice then it is a pass
    for (let i = 0; i < size1; i++) {
        let originalp = Number((yield (yield originalprices.get(i).getText()).replace('$', '').replace(',', '')));
        yield console.log(originalp);
        let calculateddiscountp = Math.round(originalp * .50);
        yield console.log(calculateddiscountp);
        let websitediscountp = Number(yield (yield discountprices.get(i).getText()).replace('$', '').replace(',', ''));
        yield console.log(websitediscountp);
        assert.isAtMost(websitediscountp, calculateddiscountp, 'WebsiteDiscountPrice: "+websitediscountp+" is less than equal to CalculatedDiscountPrice: "+calculateddiscountp');
    }
}));
cucumber_1.Given('I hover over the accessories category and click on the keychains subcategory link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.browser.actions().mouseMove(category1.accessoriesCategory).perform();
    yield category1.keychainsSubCategoryLink.click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.When('I select a product from the category page', () => __awaiter(void 0, void 0, void 0, function* () {
    let productimages = category1.productImages;
    yield productimages.get(1).click();
}));
cucumber_1.When('is taken to the product details page and I click on add to bag', () => __awaiter(void 0, void 0, void 0, function* () {
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
}));
cucumber_1.Then('the product is added to my bag page and it will display with the same brand, product, price, and quantity', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.mybagHeader), 5000);
    yield mybag.mybagHeader.getText().then(function (text) {
        expect(text).to.equal("My Bag");
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productBrand), 5000);
    yield mybag.productBrand.getText().then(function (text) {
        expect(text).to.equal(brand);
        console.log("Text is " + text + " Brand is " + brand);
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productName), 5000);
    yield mybag.productName.getAttribute("innerHTML").then(function (text) {
        expect(text).to.equal(product);
        console.log("Text is " + text + " Product is " + product);
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productPrice), 5000);
    yield mybag.productPrice.getAttribute("innerText").then(function (text) {
        expect(text.replace("$", "")).to.equal(price);
        console.log("Text is " + text + " Price is " + price);
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.qty.first()), 5000);
    yield mybag.qty.first().getAttribute("innerHTML").then(function (text) {
        expect(Number(text)).to.equal(qty);
        console.log("Text is " + text + " Qty is " + qty);
    });
}));
cucumber_1.Then('the subtotal will be tallied correctly', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.subtotal), 5000);
    yield mybag.subtotal.getAttribute("innerText").then(function (text) {
        let pricenum = Number(price.replace('$', ''));
        let subtotal = pricenum * qty;
        let cartsubtotal = Number(text.replace('Sub Total: $', ''));
        expect(cartsubtotal).to.equal(subtotal);
        console.log("cartsubtotal is " + cartsubtotal + " subtotal is " + subtotal);
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
    yield console.log("Element is present.");
    yield protractor_1.browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
    yield protractor_1.browser.sleep(3000);
    yield console.log("Clicked remove product");
}));
cucumber_1.Given('I add a keychain product and a haircare product to bag', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.browser.actions().mouseMove(category1.accessoriesCategory).perform();
    yield category1.keychainsSubCategoryLink.click();
    yield protractor_1.browser.sleep(2000);
    let productimages = category1.productImages;
    yield productimages.get(1).click();
    let productdetails = new productDetailsPg_1.productDetailsPg();
    yield productdetails.addtobag.click();
    yield protractor_1.browser.sleep(2000);
    yield category1.beautyCategory.click();
    yield protractor_1.browser.actions().mouseMove(category1.beautyCategory).perform();
    yield category1.haircareLink.click();
    yield protractor_1.browser.sleep(2000);
    productimages = category1.productImages;
    yield productimages.get(0).click();
    yield productdetails.addtobag.click();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.When('I navigate to my bag and click to remove the haircare product', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(mybag.mybag), 5000);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.mybagHeader), 5000);
    yield mybag.mybagHeader.getText().then(function (text) {
        expect(text).to.equal("My Bag");
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.numberofitems), 5000);
    yield mybag.numberofitems.getAttribute("innerHTML").then(function (text) {
        return __awaiter(this, void 0, void 0, function* () {
            itemsbeforeremoval = Number(text.replace(" items", ""));
            yield console.log("itemsbeforeremoval is " + itemsbeforeremoval);
        });
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productNameMultiple.get(0)), 5000);
    yield mybag.productNameMultiple.get(0).getAttribute("innerHTML").then(function (text) {
        removeproduct = text;
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.productPriceMultiple.get(0)), 5000);
    yield mybag.productPriceMultiple.get(0).getAttribute("innerText").then(function (text) {
        removeprice = Number(text.replace("$", ""));
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.subtotal), 5000);
    yield mybag.subtotal.getAttribute("innerText").then(function (text) {
        subtotalbeforeproductremoval = Number(text.replace('Sub Total: $', ''));
    });
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
    yield console.log("Element is present.");
    yield protractor_1.browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
    yield protractor_1.browser.sleep(3000);
    yield console.log("Clicked remove product");
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(productdetails.mybagcart), 10000);
    yield productdetails.mybagcart.click();
    yield protractor_1.browser.sleep(7000);
}));
cucumber_1.Then('the product will be removed from my bag page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield mybag.productNameMultiple.get(0).getAttribute("innerHTML").then(function (text) {
        afterremoveproductfirstproductis = text;
        assert.notEqual(removeproduct, afterremoveproductfirstproductis, "Removed first product: " + removeproduct + " After removing 1st product the first product is: " + afterremoveproductfirstproductis + " ;Failed to verify the first item is different after removing a product from cart.");
    });
}));
cucumber_1.Then('the total items will be retallied correctly', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(mybag.numberofitems), 5000);
    yield mybag.numberofitems.getText().then(function (text) {
        return __awaiter(this, void 0, void 0, function* () {
            itemsafterremoval = Number(text.replace(" item", ""));
            expect(itemsafterremoval).to.equal(itemsbeforeremoval - 1);
            console.log("itemsafterremoval is " + itemsafterremoval + " itemsbeforeremoval is " + itemsbeforeremoval);
        });
    });
}));
cucumber_1.Then('the subtotal will be retallied correctly', () => __awaiter(void 0, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwc0RlZmluaXRpb25zL3N0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLDhEQUEyRDtBQUMzRCwwREFBdUQ7QUFDdkQsb0RBQWlEO0FBQ2pELHNFQUFtRTtBQUNuRSwyQ0FBcUU7QUFDckUsZ0RBQXdCO0FBRXhCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUNqQyxJQUFJLGNBQWMsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFDNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFFMUIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsSUFBSSxPQUFPLEdBQUUsRUFBRSxDQUFDO0FBQ2hCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNaLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDcEIsSUFBSSw0QkFBNEIsR0FBRyxDQUFDLENBQUM7QUFDckMsSUFBSSxnQ0FBZ0MsR0FBRyxFQUFFLENBQUM7QUFDMUMsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDMUIsSUFBSSwyQkFBMkIsR0FBRyxDQUFDLENBQUM7QUFHcEMsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRSxHQUFPLEVBQUU7SUFDeEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMs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