"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class searchHomePg {
    constructor() {
        //this.searchBox=element(by.css("div[class='search']>div[class='criteria']>input[name='search-term']"));
        this.searchBox = protractor_1.element(protractor_1.by.name("search-term"));
        this.viewMoreResults = protractor_1.element(protractor_1.by.xpath(".//div[@class='view-more']/a[contains(text(), 'View more')]"));
    }
}
exports.searchHomePg = searchHomePg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoSG9tZVBnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvc2VhcmNoSG9tZVBnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNEO0FBRXRELE1BQWEsWUFBWTtJQU1yQjtRQUVJLHdHQUF3RztRQUN4RyxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0NBR0o7QUFkRCxvQ0FjQyJ9