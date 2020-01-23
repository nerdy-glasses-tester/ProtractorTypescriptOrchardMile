import { Given, When, Then} from "cucumber";
import { searchHomePg } from "../PageObjects/searchHomePg";
import { categoryPg } from "../PageObjects/categoryPg";
import { mybagPg } from "../PageObjects/mybagPg";
import { productDetailsPg } from "../PageObjects/productDetailsPg";
import { browser, protractor, ExpectedConditions } from "protractor";
import chai from "chai";

var assert = chai.assert;
var expect = chai.expect;
let search = new searchHomePg();
let category1 = new categoryPg();
let productdetails = new productDetailsPg();
let mybag = new mybagPg();

let brand = "";
let product= "";
let price = "";
let qty = 1;
let itemsbeforeremoval = 0;
let removeproduct = "";
let removeprice = 0;
let subtotalbeforeproductremoval = 0;
let afterremoveproductfirstproductis = "";
let itemsafterremoval = 0;
let subtotalafterproductremoval = 0;


Given('I will click search field', async()=> { 
    await browser.sleep(3000);
    await search.searchBox.click();

});

When('I enter {string}', async(keyword)=>  {
    await search.searchBox.clear().then(async()=> {
        await search.searchBox.sendKeys(keyword);
    });
    //await search.searchBox.sendKeys(string);
    //await search.searchBox.sendKeys(protractor.Key.ENTER);
    await browser.sleep(2000);
    await browser.actions().mouseMove(search.viewMoreResults).perform();
    await browser.wait(ExpectedConditions.elementToBeClickable(search.viewMoreResults), 5000);
    await search.viewMoreResults.click();
    //await browser.executeScript("arguments[0].click();", search.viewMoreResults);
    await browser.sleep(2000);

});

Then('the search results returned will display {string} products', async(keyword)=> {
    let products = category1.productname;
    let size = await products.length;

        for (let i=0; i<size; i++)
        {
            await products.get(i).getText().then(function(text){
                assert.include(text, keyword, "results contains search keyword");
            });
        }

});

Given('I will hover over a category header to bring up the subcategories popup', async()=> { 
    await browser.sleep(3000);
    await browser.actions().mouseMove(category1.shoesCategory).perform();
});

When('I select a subcategory', async()=>  {
    await category1.sandalsSubCategory.click();
    await browser.sleep(3000);

});

Then('the products displayed will show {string} name in the description text', async(subcategory)=>{
    let products = category1.productname;
    let size = await products.length;
    for(let i=0; i<size; i++)
    {
        await products.get(i).getText().then(function(text){
            expect(text).to.include(subcategory);
        });
    }
});

Then('the left side menu will have the {string} and the {string} actively open', async(category, subcategory)=>{
    await category1.leftmenuCategoryHeader.getText().then(function(text) {
        console.log(text);
        expect(text).to.include(category);
    });
 
    await category1.leftmenuSubCategoryHeader.getText().then(function(text) {
        console.log(text);
        expect(text).to.include(subcategory);
    });

});

Then('the results page displayed will show the {string} header', async(subcategoryheader)=> {
    await category1.pageCategoryHeader.getText().then(function(text){
        console.log(text);
        expect(text).to.include(subcategoryheader);
    });

});

Given('I hover over the designers link and click on View All', async()=> { 
    await browser.sleep(3000);
    await browser.actions().mouseMove(category1.designersCategory).perform();
    await category1.viewAll.click();
});

When('I click on Y link and the designer in the Y section', async()=> { 
    await category1.YLink.click();
    await category1.YumiKimLink.click();
    await browser.sleep(3000);
});

Then('the designer products displayed will show {string} name in the description text', async(designer)=> { 
    let designerHeaders = category1.designerCategoryHeader;
    let size1 = designerHeaders.length;
    for(let i=0; i<size1; i++)
    {
        await category1.designerCategoryHeader.get(i).getText().then(function(text){
            console.log(text);
            expect(text).toBe(designer);
        });
    } 

});

Then('the results page displayed will show the {string} in the header', async(designer)=> { 
    let brands = category1.productbrand;
    let size2 = await brands.length;
    for(let i=0; i<size2; i++)
    {
        await brands.get(i).getText().then(function(text){
            expect(text).toBe(designer);
        });
    }
});

Given('I hover over the beauty link and click on makeup link', async()=> { 
    await browser.sleep(3000);
    await browser.actions().mouseMove(category1.beautyCategory).perform();
    await category1.makeupLink.click();
    await browser.sleep(3000);
});

When('I scrolled down and check concealer and check Clinique from designers section', async()=> { 
    await browser.executeScript('window.scrollTo(0,10000);').then(function () {
        console.log('++++++SCROLLED Down+++++');
    });

    await browser.actions().mouseMove(category1.leftmenuConcealerCheckbox).perform();
    await category1.leftmenuConcealerCheckbox.click();
    await browser.sleep(3000);

    await browser.executeScript('window.scrollTo(10000, 12000);').then(function () {
        console.log('++++++SCROLLED Down+++++');
    });

    let designerheader = category1.leftmenuDesignersHeaderLink;
    let length1 = await designerheader.count();
    console.log("Length1 is: "+Number(length1));

    for(let i=0; i<length1; i++)
    {
        if(i===2)
        {
            await browser.actions().mouseMove(category1.leftmenuDesignersHeaderLink.get(i)).perform();
            await browser.wait(ExpectedConditions.elementToBeClickable(category1.leftmenuDesignersHeaderLink.get(i)), 5000);
            await category1.leftmenuDesignersHeaderLink.get(i).click();
            console.log("Clicked designer");
            await browser.sleep(3000);
        }

    }

    let cliniquedesigner = category1.leftmenuDesignerCliniqueLink;
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

});

Then('the makeup product results will filter to display {string} {string}', async(brand, makeupcategory)=> { 
    let brands = category1.productbrand;
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

    let products = category1.productname;
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

Given('I clicked on sales category', async()=> { 
    await browser.sleep(3000);
    await category1.salesCategory.click();
    await browser.sleep(3000);
});

When('I scroll down and click on 50 percent off or more link to filter further', async()=> { 
    await browser.executeScript('window.scrollTo(0,10000);').then(function () {
        console.log('++++++SCROLLED Down+++++');
    });
    await browser.sleep(3000);
    let fiftyoff = category1.fiftypercentoffLink;
    await category1.fiftypercentoffLink.get(1).click();
    await browser.sleep(3000);
});

Then('all products returned have prices that are 50 percent off or more', async()=> { 
        let originalprices = category1.originalPrice;
        let discountprices = category1.discountPrice;
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

            assert.isAtMost(websitediscountp, calculateddiscountp, 'WebsiteDiscountPrice: "+websitediscountp+" is less than equal to CalculatedDiscountPrice: "+calculateddiscountp');     
        }
});

Given('I hover over the accessories category and click on the keychains subcategory link', async()=> { 
    await browser.sleep(3000);
    await browser.actions().mouseMove(category1.accessoriesCategory).perform();
    await category1.keychainsSubCategoryLink.click();
    await browser.sleep(3000);
});

When('I select a product from the category page', async()=> { 
    let productimages = category1.productImages;
    await productimages.get(1).click();
});

When('is taken to the product details page and I click on add to bag', async()=> { 
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
});

Then('the product is added to my bag page and it will display with the same brand, product, price, and quantity', async()=> { 
    await browser.wait(ExpectedConditions.presenceOf(mybag.mybagHeader), 5000);
    await mybag.mybagHeader.getText().then(function(text){
        expect(text).to.equal("My Bag");
    });

    await browser.wait(ExpectedConditions.presenceOf(mybag.productBrand), 5000);
    await mybag.productBrand.getText().then(function(text){
        expect(text).to.equal(brand);
        console.log("Text is "+text+" Brand is "+brand);
  
    });

    await browser.wait(ExpectedConditions.presenceOf(mybag.productName), 5000);
    await mybag.productName.getAttribute("innerHTML").then(function(text){
        expect(text).to.equal(product);
        console.log("Text is "+text+" Product is "+product);

    });

    await browser.wait(ExpectedConditions.presenceOf(mybag.productPrice), 5000);
    await mybag.productPrice.getAttribute("innerText").then(function(text){
        expect(text.replace("$", "")).to.equal(price);
        console.log("Text is "+text+" Price is "+price);

    });

    await browser.wait(ExpectedConditions.presenceOf(mybag.qty.first()), 5000);
    await mybag.qty.first().getAttribute("innerHTML").then(function(text){
        expect(Number(text)).to.equal(qty);
        console.log("Text is "+text+" Qty is "+qty);

    });

});

Then('the subtotal will be tallied correctly', async()=> { 
    await browser.wait(ExpectedConditions.presenceOf(mybag.subtotal), 5000);
    await mybag.subtotal.getAttribute("innerText").then(function(text){
        let pricenum = Number(price.replace('$',''));
        let subtotal = pricenum * qty;

        let cartsubtotal = Number(text.replace('Sub Total: $', ''));
        expect(cartsubtotal).to.equal(subtotal);
        console.log("cartsubtotal is "+cartsubtotal+" subtotal is "+subtotal);

    });

    await browser.wait(ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
    await console.log("Element is present.");
    await browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
    await browser.sleep(3000);
    await console.log("Clicked remove product");

});

Given('I add a keychain product and a haircare product to bag', async()=> { 
    await browser.sleep(3000);
    await browser.actions().mouseMove(category1.accessoriesCategory).perform();
    await category1.keychainsSubCategoryLink.click();
    await browser.sleep(2000);

    let productimages = category1.productImages;
    await productimages.get(1).click();
    let productdetails = new productDetailsPg();
    await productdetails.addtobag.click();
    await browser.sleep(2000);
    await category1.beautyCategory.click();
    await browser.actions().mouseMove(category1.beautyCategory).perform();
    await category1.haircareLink.click();
    await browser.sleep(2000);
    productimages = category1.productImages;
    await productimages.get(0).click();
    await productdetails.addtobag.click();
    await browser.sleep(2000);
});

When('I navigate to my bag and click to remove the haircare product', async()=> { 
    await browser.wait(ExpectedConditions.visibilityOf(mybag.mybag), 5000);
    await browser.wait(ExpectedConditions.presenceOf(mybag.mybagHeader), 5000);
    await mybag.mybagHeader.getText().then(function(text){
        expect(text).to.equal("My Bag");
    });

    await browser.wait(ExpectedConditions.presenceOf(mybag.numberofitems), 5000);
    await mybag.numberofitems.getAttribute("innerHTML").then(async function(text){
        itemsbeforeremoval=Number(text.replace(" items", ""));
        await console.log("itemsbeforeremoval is "+itemsbeforeremoval);
    });

    await browser.wait(ExpectedConditions.presenceOf(mybag.productNameMultiple.get(0)), 5000);
    await mybag.productNameMultiple.get(0).getAttribute("innerHTML").then(function(text){
        removeproduct=text;
    });

    await browser.wait(ExpectedConditions.presenceOf(mybag.productPriceMultiple.get(0)), 5000);
    await mybag.productPriceMultiple.get(0).getAttribute("innerText").then(function(text){
        removeprice = Number(text.replace("$", ""));
    });
    
    await browser.wait(ExpectedConditions.presenceOf(mybag.subtotal), 5000);
    await mybag.subtotal.getAttribute("innerText").then(function(text){
        subtotalbeforeproductremoval = Number(text.replace('Sub Total: $', ''));
    });

    await browser.wait(ExpectedConditions.presenceOf(mybag.remove1stProductBtn), 10000);
    await console.log("Element is present.");
    await browser.executeScript("arguments[0].click();", mybag.remove1stProductBtn);
    await browser.sleep(3000);
    await console.log("Clicked remove product");
    await browser.wait(ExpectedConditions.elementToBeClickable(productdetails.mybagcart), 10000);
    await productdetails.mybagcart.click();
    await browser.sleep(7000);

});

Then('the product will be removed from my bag page', async()=> { 
        await mybag.productNameMultiple.get(0).getAttribute("innerHTML").then(function(text){
        afterremoveproductfirstproductis=text;
        assert.notEqual(removeproduct, afterremoveproductfirstproductis, "Removed first product: "+removeproduct+" After removing 1st product the first product is: "+afterremoveproductfirstproductis+" ;Failed to verify the first item is different after removing a product from cart.");
    });
});

Then('the total items will be retallied correctly', async()=> { 
        await browser.wait(ExpectedConditions.presenceOf(mybag.numberofitems), 5000);
        await mybag.numberofitems.getText().then(async function(text){
        itemsafterremoval = Number(text.replace(" item", ""));
        expect(itemsafterremoval).to.equal(itemsbeforeremoval-1);
        console.log("itemsafterremoval is "+itemsafterremoval+" itemsbeforeremoval is "+itemsbeforeremoval);
    });

});

Then('the subtotal will be retallied correctly', async()=> { 
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