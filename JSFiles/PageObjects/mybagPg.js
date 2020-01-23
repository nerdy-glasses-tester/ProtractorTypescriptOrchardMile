"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class mybagPg {
    constructor() {
        this.closebtn = protractor_1.element(protractor_1.by.xpath(".//div[@class='modal-panel open']/div[@class='content']/button[@href='javascript:void(0);']"));
        this.mybag = protractor_1.element(protractor_1.by.css("div[class='modal-view-container modal-cart']"));
        this.mybagHeader = protractor_1.element(protractor_1.by.xpath(".//h4[contains(text(), 'My Bag')]"));
        this.numberofitems = protractor_1.element(protractor_1.by.css("h5>ng-pluralize"));
        this.productBrandMultiple = protractor_1.element.all(protractor_1.by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='brand']"));
        this.productNameMultiple = protractor_1.element.all(protractor_1.by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='name']"));
        this.productPriceMultiple = protractor_1.element.all(protractor_1.by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='price']/span[@class='currency-value']"));
        this.productBrand = protractor_1.element(protractor_1.by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='brand']"));
        this.productName = protractor_1.element(protractor_1.by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='name']"));
        this.productPrice = protractor_1.element(protractor_1.by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='price']/span[@class='currency-value']"));
        this.qty = protractor_1.element.all(protractor_1.by.options("num for num in quantityOptions track by num"));
        this.subtotal = protractor_1.element(protractor_1.by.xpath(".//div[@class='modal-view-container modal-cart']//div[@class='subtotal']"));
        //this.removeBtn=element.all(by.xpath(".//div[@class='remove']/button[contains(text(), 'remove')]"));
        //this.removeBtn=element.all(by.css("div[class='remove']>button[ng-click='remove(item)']"));
        //this.removeBtn=element.all(by.buttonText("remove"));
        //this.remove1stProductBtn=element(by.xpath(".//ol[@class='item-list']/li[1]/div[@class='info-column']//div[@class='remove']/button[contains(text(), 'remove')]"));
        //this.remove1stProductBtn=element(by.css("div.modal-view-container.modal-cart>div.cart>ol.item-list>li:nth-of-type(1)>div.info-column>div.remove>button"));
        this.remove1stProductBtn = protractor_1.element(protractor_1.by.xpath(".//ol[@class='item-list']/li[1]/div[@class='info-column']//div[@class='remove']/button[@href='javascript:void(0)']"));
        this.checkout = protractor_1.element(protractor_1.by.buttonText("Checkout"));
    }
}
exports.mybagPg = mybagPg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXliYWdQZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL215YmFnUGcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEU7QUFFMUUsTUFBYSxPQUFPO0lBaUJoQjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZGQUE2RixDQUFDLENBQUMsQ0FBQztRQUMvSCxJQUFJLENBQUMsS0FBSyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsb0JBQW9CLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDLENBQUM7UUFDekgsSUFBSSxDQUFDLG1CQUFtQixHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZILElBQUksQ0FBQyxvQkFBb0IsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFHQUFxRyxDQUFDLENBQUMsQ0FBQztRQUV2SixJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFHQUFxRyxDQUFDLENBQUMsQ0FBQztRQUMzSSxJQUFJLENBQUMsR0FBRyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBFQUEwRSxDQUFDLENBQUMsQ0FBQztRQUM1RyxxR0FBcUc7UUFDckcsNEZBQTRGO1FBQzVGLHNEQUFzRDtRQUN0RCxtS0FBbUs7UUFDbkssNEpBQTRKO1FBQzVKLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQyxDQUFDO1FBQ2pLLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUVKO0FBMUNELDBCQTBDQyJ9