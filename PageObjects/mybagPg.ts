import {ElementFinder, ElementArrayFinder, element, by} from "protractor";

export class mybagPg
{
    closebtn:ElementFinder;
    mybag:ElementFinder;
    mybagHeader:ElementFinder;
    numberofitems:ElementFinder;
    productBrandMultiple:ElementArrayFinder;
    productNameMultiple:ElementArrayFinder;
    productPriceMultiple:ElementArrayFinder;
    productBrand:ElementFinder;
    productName:ElementFinder;
    productPrice:ElementFinder;
    qty:ElementArrayFinder;
    subtotal:ElementFinder;
    remove1stProductBtn:ElementFinder;
    checkout:ElementFinder;

    constructor()
    {
        this.closebtn=element(by.xpath(".//div[@class='modal-panel open']/div[@class='content']/button[@href='javascript:void(0);']"));
        this.mybag=element(by.css("div[class='modal-view-container modal-cart']"));
        this.mybagHeader=element(by.xpath(".//h4[contains(text(), 'My Bag')]"));
        this.numberofitems=element(by.css("h5>ng-pluralize"));

        this.productBrandMultiple=element.all(by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='brand']"));
        this.productNameMultiple=element.all(by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='name']"));
        this.productPriceMultiple=element.all(by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='price']/span[@class='currency-value']"));
        
        this.productBrand=element(by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='brand']"));
        this.productName=element(by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='name']"));
        this.productPrice=element(by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='price']/span[@class='currency-value']"));
        this.qty=element.all(by.options("num for num in quantityOptions track by num"));
        this.subtotal=element(by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='subtotal']"));
        //this.removeBtn=element.all(by.xpath(".//div[@class='remove']/button[contains(text(), 'remove')]"));
        //this.removeBtn=element.all(by.css("div[class='remove']>button[ng-click='remove(item)']"));
        //this.removeBtn=element.all(by.buttonText("remove"));
        //this.remove1stProductBtn=element(by.xpath(".//ol[@class='item-list']/li[1]/div[@class='info-column']//div[@class='remove']/button[contains(text(), 'remove')]"));
        //this.remove1stProductBtn=element(by.css("div.modal-view-container.modal-cart>div.cart>ol.item-list>li:nth-of-type(1)>div.info-column>div.remove>button"));
        this.remove1stProductBtn=element(by.xpath(".//ol[@class='item-list']/li[1]/div[@class='info-column']//div[@class='remove']/button[@href='javascript:void(0)']"));
        this.checkout=element(by.buttonText("Checkout"));
    }

}