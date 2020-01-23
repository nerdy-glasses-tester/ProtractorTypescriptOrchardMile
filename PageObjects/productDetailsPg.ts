import {ElementFinder, ElementArrayFinder, element, by} from "protractor";

export class productDetailsPg
{
    productBrand:ElementFinder;
    productName:ElementFinder;
    productPrice:ElementFinder;
    addtobag:ElementFinder;
    sizeDrpDownOption1:ElementFinder;
    mybagcart:ElementFinder;

    constructor()
    {
        this.productBrand=element(by.css("a[class='brand-name']"));
        this.productName=element(by.css("div[class='name']"));
        this.productPrice=element(by.css("span[itemprop='price']"));
        this.addtobag=element(by.buttonText("add to bag"));
        this.sizeDrpDownOption1=element(by.id("size-select")).all(by.tagName('option')).get(1);
        this.mybagcart=element(by.css("li[class='cart bag-orchard']>a>span[class='shopping-bag-icon']>span[class='icon']"));
    }

}