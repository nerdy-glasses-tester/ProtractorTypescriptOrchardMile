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
describe('Orchard Mile 50 Percent Off Test', () => {
    it('Validate products returned are really 50 percent off or more', () => __awaiter(void 0, void 0, void 0, function* () {
        let category = new categoryPg_1.categoryPg();
        yield protractor_1.browser.sleep(3000);
        yield category.salesCategory.click();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        yield protractor_1.browser.sleep(3000);
        let fiftyoff = category.fiftypercentoffLink;
        yield category.fiftypercentoffLink.get(1).click();
        yield protractor_1.browser.sleep(3000);
        let originalprices = category.originalPrice;
        let discountprices = category.discountPrice;
        let size1 = yield originalprices.count();
        let discount = .50;
        //if discountprice is less than or equal to calculatedprice then it is a pass
        for (let i = 0; i < size1; i++) {
            let originalp = Number((yield (yield originalprices.get(i).getText()).replace('$', '').replace(',', '')));
            yield console.log(originalp);
            let calculateddiscountp = Math.round(originalp * .50);
            yield console.log(calculateddiscountp);
            let websitediscountp = Number(yield (yield discountprices.get(i).getText()).replace('$', '').replace(',', ''));
            yield console.log(websitediscountp);
            if (yield !(websitediscountp <= calculateddiscountp)) {
                yield console.log("Fail");
                break;
            }
            else {
                yield console.log("WebsiteDiscountPrice: " + websitediscountp + " is less than equal to CalculatedDiscountPrice: " + calculateddiscountp);
            }
        }
        yield console.log("Pass");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTBwZXJjZW50b2ZmVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RzLzUwcGVyY2VudG9mZlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDaEQsMERBQXVEO0FBRXZELFFBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFFLEVBQUU7SUFDN0MsRUFBRSxDQUFDLDhEQUE4RCxFQUFFLEdBQU8sRUFBRTtRQUN4RSxJQUFJLFFBQVEsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUNoQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFDNUMsTUFBTSxRQUFRLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksS0FBSyxHQUFHLE1BQU0sY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQTtRQUVsQiw2RUFBNkU7UUFDN0UsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDekI7WUFDSSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0IsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN2QyxJQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFcEMsSUFBRyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsSUFBRSxtQkFBbUIsQ0FBQyxFQUNqRDtnQkFDSSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFCLE1BQU07YUFDVDtpQkFFRDtnQkFDSSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUMsZ0JBQWdCLEdBQUMsa0RBQWtELEdBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUN2STtTQUNKO1FBRUQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9