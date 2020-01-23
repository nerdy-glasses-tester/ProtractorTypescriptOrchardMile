import {ElementFinder, ElementArrayFinder, element, by} from "protractor";

export class categoryPg
{
    productname:ElementArrayFinder;
    productbrand:ElementArrayFinder;
    designersCategory:ElementFinder;
    viewAll:ElementFinder;
    YLink:ElementFinder;
    YumiKimLink:ElementFinder;
    designerCategoryHeader:ElementArrayFinder;
    beautyCategory:ElementFinder;
    makeupLink:ElementFinder;
    haircareLink:ElementFinder;
    leftmenuConcealerCheckbox:ElementFinder;
    leftmenuDesignersHeaderLink:ElementArrayFinder;
    leftmenuDesignerCliniqueLink:ElementArrayFinder;
    shoesCategory:ElementFinder;
    sandalsSubCategory:ElementFinder;
    pageCategoryHeader:ElementFinder;
    leftmenuCategoryHeader:ElementFinder;
    leftmenuSubCategoryHeader:ElementFinder;
    salesCategory:ElementFinder;
    fiftypercentoffLink:ElementArrayFinder;
    originalPrice:ElementArrayFinder;
    discountPrice:ElementArrayFinder;
    accessoriesCategory:ElementFinder;
    keychainsSubCategoryLink:ElementFinder;
    productImages:ElementArrayFinder;
    

    constructor()
    {
        this.productname=element.all(by.css("span[class='product-name']"));
        this.productbrand=element.all(by.css("span[class='product-brand']"));
        this.designersCategory=element(by.css("li[role='tab']>a[href='/designers']"));
        this.viewAll=element(by.linkText("View All"));
        this.YLink=element(by.linkText("Y"));
        this.YumiKimLink=element(by.linkText("Yumi Kim"));
        this.designerCategoryHeader=element.all(by.xpath(".//span[contains(text(), 'from Yumi Kim')]"));
        this.beautyCategory=element(by.css("li[role='tab']>a[href='/beauty']"));
        this.makeupLink=element(by.linkText("Makeup"));
        this.haircareLink=element(by.linkText("Haircare"));
        this.leftmenuConcealerCheckbox=element(by.xpath(".//a[@ng-if='urlMode']//span[contains(text(), 'Concealer')]"));
        this.leftmenuDesignersHeaderLink=element.all(by.css("a[ng-click='toggleOpen()']>div>span[class='title']"));
        this.leftmenuDesignerCliniqueLink=element.all(by.xpath(".//li[@ng-click='selectBrand(b)']//a[contains(text(), 'Clinique')]"));
        this.shoesCategory=element(by.css("li[role='tab']>a[href='/shoes']"));
        this.sandalsSubCategory=element(by.linkText("Sandals"));
        this.pageCategoryHeader=element(by.xpath(".//div[@class='number-of-products']//following-sibling::h1[contains(text(), 'sandals')]"));
        this.leftmenuCategoryHeader=element(by.cssContainingText("a.active", "Shoes"));
        this.leftmenuSubCategoryHeader=element(by.cssContainingText("a.active", "Sandals"));
        this.salesCategory=element(by.css("li[role='tab']>a[href='/sale']"));
        this.fiftypercentoffLink=element.all(by.xpath(".//ul[@class='discount-list']/li[contains(text(), '50% off or more')]"));
        this.originalPrice=element.all(by.xpath(".//div[@class='product-price small']/span[@class='secondary']/span[@class='currency-value']"));
        this.discountPrice=element.all(by.xpath(".//div[@class='product-price small']/span[@class='primary sale']/span[@class='currency-value']"));
        this.accessoriesCategory=element(by.css("li[role='tab']>a[href='/accessories']"));
        this.keychainsSubCategoryLink=element(by.linkText("Keychains"));
        this.productImages=element.all(by.css("div[class='product-image']>img:nth-of-type(2)"));
   
    }


}
