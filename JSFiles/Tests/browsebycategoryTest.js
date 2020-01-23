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
describe('Orchard Mile Browse By Category Test', () => {
    it('Validate you can browse by category', () => __awaiter(void 0, void 0, void 0, function* () {
        let category = new categoryPg_1.categoryPg();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.actions().mouseMove(category.shoesCategory).perform();
        yield category.sandalsSubCategory.click();
        yield protractor_1.browser.sleep(3000);
        yield category.pageCategoryHeader.getText().then(function (text) {
            console.log(text);
            if (text.includes("SANDALS")) {
                console.log("Page category header passes.");
            }
            else {
                console.log("Page category header fails.");
            }
        });
        yield category.leftmenuCategoryHeader.getText().then(function (text) {
            if (text.includes("Shoes")) {
                console.log("Left menu category header passes.");
            }
            else {
                console.log("Left menu category header fails.");
            }
        });
        yield category.leftmenuSubCategoryHeader.getText().then(function (text) {
            if (text.includes("Sandals")) {
                console.log("Left menu subcategory header passes.");
            }
            else {
                console.log("Left menu subcategory header fails.");
            }
        });
        let products = category.productname;
        let size = yield products.length;
        for (let i = 0; i < size; i++) {
            products.get(i).getText().then(function (text) {
                if (text.includes("Sandals")) {
                    console.log("Product name passes.");
                }
                else {
                    console.log("Product name fails.");
                }
            });
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlYnljYXRlZ29yeVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UZXN0cy9icm93c2VieWNhdGVnb3J5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFnRDtBQUNoRCwwREFBdUQ7QUFFdkQsUUFBUSxDQUFDLHNDQUFzQyxFQUFFLEdBQUUsRUFBRTtJQUNqRCxFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBTyxFQUFFO1FBRWhELElBQUksUUFBUSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEUsTUFBTSxRQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQixNQUFNLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUMzQjtnQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDL0M7aUJBRUQ7Z0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2FBQzlDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFTixNQUFNLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQzlELElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDekI7Z0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO2FBQ25EO2lCQUVEO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQTthQUNsRDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLENBQUMseUJBQXlCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNqRSxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQzNCO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQTthQUN0RDtpQkFFRDtnQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7YUFDckQ7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2pDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQ3hCO1lBQ0ksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUN4QyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQzNCO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDdkM7cUJBRUQ7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2lCQUN0QztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFFRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==