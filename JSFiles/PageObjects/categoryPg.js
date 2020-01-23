"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class categoryPg {
    constructor() {
        this.productname = protractor_1.element.all(protractor_1.by.css("span[class='product-name']"));
        this.productbrand = protractor_1.element.all(protractor_1.by.css("span[class='product-brand']"));
        this.designersCategory = protractor_1.element(protractor_1.by.css("li[role='tab']>a[href='/designers']"));
        this.viewAll = protractor_1.element(protractor_1.by.linkText("View All"));
        this.YLink = protractor_1.element(protractor_1.by.linkText("Y"));
        this.YumiKimLink = protractor_1.element(protractor_1.by.linkText("Yumi Kim"));
        this.designerCategoryHeader = protractor_1.element.all(protractor_1.by.xpath(".//span[contains(text(), 'from Yumi Kim')]"));
        this.beautyCategory = protractor_1.element(protractor_1.by.css("li[role='tab']>a[href='/beauty']"));
        this.makeupLink = protractor_1.element(protractor_1.by.linkText("Makeup"));
        this.haircareLink = protractor_1.element(protractor_1.by.linkText("Haircare"));
        this.leftmenuConcealerCheckbox = protractor_1.element(protractor_1.by.xpath(".//a[@ng-if='urlMode']//span[contains(text(), 'Concealer')]"));
        this.leftmenuDesignersHeaderLink = protractor_1.element.all(protractor_1.by.css("a[ng-click='toggleOpen()']>div>span[class='title']"));
        this.leftmenuDesignerCliniqueLink = protractor_1.element.all(protractor_1.by.xpath(".//li[@ng-click='selectBrand(b)']//a[contains(text(), 'Clinique')]"));
        this.shoesCategory = protractor_1.element(protractor_1.by.css("li[role='tab']>a[href='/shoes']"));
        this.sandalsSubCategory = protractor_1.element(protractor_1.by.linkText("Sandals"));
        this.pageCategoryHeader = protractor_1.element(protractor_1.by.xpath(".//div[@class='number-of-products']//following-sibling::h1[contains(text(), 'sandals')]"));
        this.leftmenuCategoryHeader = protractor_1.element(protractor_1.by.cssContainingText("a.active", "Shoes"));
        this.leftmenuSubCategoryHeader = protractor_1.element(protractor_1.by.cssContainingText("a.active", "Sandals"));
        this.salesCategory = protractor_1.element(protractor_1.by.css("li[role='tab']>a[href='/sale']"));
        this.fiftypercentoffLink = protractor_1.element.all(protractor_1.by.xpath(".//ul[@class='discount-list']/li[contains(text(), '50% off or more')]"));
        this.originalPrice = protractor_1.element.all(protractor_1.by.xpath(".//div[@class='product-price small']/span[@class='secondary']/span[@class='currency-value']"));
        this.discountPrice = protractor_1.element.all(protractor_1.by.xpath(".//div[@class='product-price small']/span[@class='primary sale']/span[@class='currency-value']"));
        this.accessoriesCategory = protractor_1.element(protractor_1.by.css("li[role='tab']>a[href='/accessories']"));
        this.keychainsSubCategoryLink = protractor_1.element(protractor_1.by.linkText("Keychains"));
        this.productImages = protractor_1.element.all(protractor_1.by.css("div[class='product-image']>img:nth-of-type(2)"));
    }
}
exports.categoryPg = categoryPg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnlQZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL2NhdGVnb3J5UGcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEU7QUFFMUUsTUFBYSxVQUFVO0lBNkJuQjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsc0JBQXNCLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMseUJBQXlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUMsQ0FBQztRQUNoSCxJQUFJLENBQUMsMkJBQTJCLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLDRCQUE0QixHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0VBQW9FLENBQUMsQ0FBQyxDQUFDO1FBQzlILElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsa0JBQWtCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLHNCQUFzQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyx5QkFBeUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLG1CQUFtQixHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUVBQXVFLENBQUMsQ0FBQyxDQUFDO1FBQ3hILElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2RkFBNkYsQ0FBQyxDQUFDLENBQUM7UUFDeEksSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdHQUFnRyxDQUFDLENBQUMsQ0FBQztRQUMzSSxJQUFJLENBQUMsbUJBQW1CLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsd0JBQXdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztJQUU1RixDQUFDO0NBR0o7QUE1REQsZ0NBNERDIn0=