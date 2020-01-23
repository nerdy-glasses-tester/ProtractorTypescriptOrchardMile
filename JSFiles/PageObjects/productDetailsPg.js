"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class productDetailsPg {
    constructor() {
        this.productBrand = protractor_1.element(protractor_1.by.css("a[class='brand-name']"));
        this.productName = protractor_1.element(protractor_1.by.css("div[class='name']"));
        this.productPrice = protractor_1.element(protractor_1.by.css("span[itemprop='price']"));
        this.addtobag = protractor_1.element(protractor_1.by.buttonText("add to bag"));
        this.sizeDrpDownOption1 = protractor_1.element(protractor_1.by.id("size-select")).all(protractor_1.by.tagName('option')).get(1);
        this.mybagcart = protractor_1.element(protractor_1.by.css("li[class='cart bag-orchard']>a>span[class='shopping-bag-icon']>span[class='icon']"));
    }
}
exports.productDetailsPg = productDetailsPg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbHNQZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL3Byb2R1Y3REZXRhaWxzUGcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEU7QUFFMUUsTUFBYSxnQkFBZ0I7SUFTekI7UUFFSSxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxrQkFBa0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDLENBQUM7SUFDeEgsQ0FBQztDQUVKO0FBbkJELDRDQW1CQyJ9