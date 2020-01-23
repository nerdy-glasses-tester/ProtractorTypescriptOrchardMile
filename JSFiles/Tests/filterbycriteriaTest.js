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
describe('Orchard Mile Filter By Criteria Test', () => {
    it('Validate you can filter by criteria', () => __awaiter(void 0, void 0, void 0, function* () {
        let category = new categoryPg_1.categoryPg();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.actions().mouseMove(category.beautyCategory).perform();
        yield category.makeupLink.click();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        yield protractor_1.browser.actions().mouseMove(category.leftmenuConcealerCheckbox).perform();
        yield category.leftmenuConcealerCheckbox.click();
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.executeScript('window.scrollTo(10000, 12000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        let designerheader = category.leftmenuDesignersHeaderLink;
        let length1 = yield designerheader.count();
        console.log("Length1 is: " + Number(length1));
        for (let i = 0; i < length1; i++) {
            if (i === 2) {
                yield protractor_1.browser.actions().mouseMove(category.leftmenuDesignersHeaderLink.get(i)).perform();
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(category.leftmenuDesignersHeaderLink.get(i)), 5000);
                yield category.leftmenuDesignersHeaderLink.get(i).click();
                console.log("Clicked designer");
                yield protractor_1.browser.sleep(3000);
            }
        }
        let cliniquedesigner = category.leftmenuDesignerCliniqueLink;
        let length2 = yield cliniquedesigner.count();
        console.log("Length2 is : " + Number(length2));
        for (let i = 0; i < length2; i++) {
            if (i === 1) {
                yield protractor_1.browser.actions().mouseMove(cliniquedesigner.get(i)).perform();
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(cliniquedesigner.get(i)), 5000);
                yield cliniquedesigner.get(i).click();
                console.log("Clicked Clinique");
                yield protractor_1.browser.sleep(3000);
            }
        }
        let brands = category.productbrand;
        let size1 = brands.length;
        for (let i = 0; i < size1; i++) {
            yield brands.get(i).getText().then(function (text) {
                if (text.includes("Clinique")) {
                    console.log("Brand matches.");
                }
                else {
                    console.log("Brand doesn't matches.");
                }
            });
        }
        let products = category.productname;
        let size2 = products.length;
        for (let i = 0; i < size1; i++) {
            yield products.get(i).getText().then(function (text) {
                if (text.includes("Concealer")) {
                    console.log("Product matches.");
                }
                else {
                    console.log("Product doesn't matches.");
                }
            });
        }
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyYnljcml0ZXJpYVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UZXN0cy9maWx0ZXJieWNyaXRlcmlhVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFvRTtBQUNwRSwwREFBdUQ7QUFFdkQsUUFBUSxDQUFDLHNDQUFzQyxFQUFFLEdBQUUsRUFBRTtJQUNqRCxFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBTyxFQUFFO1FBQy9DLElBQUksUUFBUSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckUsTUFBTSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hGLE1BQU0sUUFBUSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsMkJBQTJCLENBQUM7UUFDMUQsSUFBSSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFNUMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFDM0I7WUFDSSxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQ1I7Z0JBQ0ksTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pGLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvRyxNQUFNLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtTQUVKO1FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsNEJBQTRCLENBQUM7UUFDN0QsSUFBSSxPQUFPLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUMzQjtZQUNJLElBQUcsQ0FBQyxLQUFHLENBQUMsRUFDUjtnQkFDSSxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNyRSxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRixNQUFNLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1NBRUo7UUFHRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ25DLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDekI7WUFDSSxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFDNUMsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUM1QjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ2pDO3FCQUVEO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztpQkFDekM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzVCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQ3pCO1lBQ0ksTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBQzlDLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFDN0I7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUNuQztxQkFFRDtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7aUJBQzNDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUdMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9