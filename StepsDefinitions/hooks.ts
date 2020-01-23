
import {After, Before, Status} from "cucumber";
import { browser } from "protractor";

Before( function() {
    console.log("Test starting");
});

Before({tags: "@BrowseByCategory" }, function() {
    console.log("This is browse by category test.");
});

After( async function(scenario) {
    console.log("Test completed");
    if(scenario.result.status===Status.FAILED)
    {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
    
});