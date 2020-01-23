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
const searchHomePg_1 = require("../PageObjects/searchHomePg");
const categoryPg_1 = require("../PageObjects/categoryPg");
describe('Orchard Mile Search Test', () => {
    it('Validate you can search for wallet', () => __awaiter(void 0, void 0, void 0, function* () {
        let search = new searchHomePg_1.searchHomePg();
        yield protractor_1.browser.sleep(3000);
        yield search.searchBox.click();
        yield search.searchBox.clear().then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield search.searchBox.sendKeys("wallet");
        }));
        //await search.searchBox.sendKeys(protractor.Key.ENTER);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.browser.actions().mouseMove(search.viewMoreResults).perform();
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(search.viewMoreResults), 5000);
        yield search.viewMoreResults.click();
        //await browser.executeScript("arguments[0].click();", search.viewMoreResults);
        yield protractor_1.browser.sleep(2000);
        let category = new categoryPg_1.categoryPg();
        let products = category.productname;
        let size = yield products.length;
        for (let i = 0; i < size; i++) {
            yield products.get(i).getText().then(function (text) {
                console.log(text);
                if (text.includes("Wallet")) {
                    console.log("Pass");
                }
                else {
                    console.log("Fail");
                }
            });
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RzL3NlYXJjaFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Y7QUFDaEYsOERBQTJEO0FBQzNELDBEQUF1RDtBQUd2RCxRQUFRLENBQUMsMEJBQTBCLEVBQUUsR0FBRSxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFPLEVBQUU7UUFFOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFDaEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFPLEVBQUU7WUFDekMsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ0gsd0RBQXdEO1FBQ3hELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUYsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLCtFQUErRTtRQUMvRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksUUFBUSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRWpDLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQ3pCO1lBQ0ksTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDMUI7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkI7cUJBRUQ7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBRUwsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=