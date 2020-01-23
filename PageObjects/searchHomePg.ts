import {ElementFinder, element, by} from "protractor";

export class searchHomePg
{
    searchBox:ElementFinder;
    viewMoreResults:ElementFinder;


    constructor()
    {
        //this.searchBox=element(by.css("div[class='search']>div[class='criteria']>input[name='search-term']"));
        this.searchBox=element(by.name("search-term"));
        this.viewMoreResults=element(by.xpath(".//div[@class='view-more']/a[contains(text(), 'View more')]"));
    }


}

