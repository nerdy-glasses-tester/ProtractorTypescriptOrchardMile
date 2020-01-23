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
describe('Orchard Mile Browse By Designer Test', () => {
    it('Validate you can browse by designer', () => __awaiter(void 0, void 0, void 0, function* () {
        let category = new categoryPg_1.categoryPg();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.actions().mouseMove(category.designersCategory).perform();
        yield category.viewAll.click();
        yield category.YLink.click();
        yield category.YumiKimLink.click();
        yield protractor_1.browser.sleep(3000);
        let designerHeaders = category.designerCategoryHeader;
        let size1 = designerHeaders.length;
        for (let i = 0; i < size1; i++) {
            yield category.designerCategoryHeader.get(i).getText().then(function (text) {
                console.log(text);
                if (text.includes("Yumi Kim")) {
                    console.log("Header contains designer name.");
                }
                else {
                    console.log("Header does not contain designer name.");
                }
            });
        }
        let brands = category.productbrand;
        let size2 = brands.length;
        for (let i = 0; i < size2; i++) {
            yield brands.get(i).getText().then(function (text) {
                if (text.includes("Yumi Kim")) {
                    console.log("Brand contains designer name.");
                }
                else {
                    console.log("Brand does not contain designer name.");
                }
            });
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlYnlkZXNpZ25lclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UZXN0cy9icm93c2VieWRlc2lnbmVyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFnRDtBQUNoRCwwREFBdUQ7QUFFdkQsUUFBUSxDQUFDLHNDQUFzQyxFQUFFLEdBQUUsRUFBRTtJQUNqRCxFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBTyxFQUFFO1FBQy9DLElBQUksUUFBUSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4RSxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztRQUN0RCxJQUFJLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQ25DLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQ3pCO1lBQ0ksTUFBTSxRQUFRLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFDNUI7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO2lCQUNoRDtxQkFFRDtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7aUJBQ3hEO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FFTjtRQUdELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDbkMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMxQixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUN6QjtZQUNJLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUM1QyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQzVCO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQTtpQkFDL0M7cUJBRUQ7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFBO2lCQUN2RDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFHTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==