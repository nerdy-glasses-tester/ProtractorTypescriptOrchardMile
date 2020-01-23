"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',
    specs: ['Tests/removefromcartTest.js'],
    //getPageTimeout: 90000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000
    },
    onPrepare() {
        //browser.resetUrl = 'about:blank'; //Need for Safari
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.driver.get("https://orchardmile.com");
        //browser.driver.manage().timeouts().setScriptTimeout(10000);
        // for non-angular page
        //browser.ignoreSynchronization = true;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFFaEMsUUFBQSxNQUFNLEdBQVc7SUFFMUIsWUFBWSxFQUFFO1FBQ1osYUFBYSxFQUFFLFFBQVE7S0FDeEI7SUFDRCxTQUFTLEVBQUUsVUFBVTtJQUNyQixLQUFLLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztJQUN0Qyx3QkFBd0I7SUFDeEIsZUFBZSxFQUFFO1FBQ2IsVUFBVSxFQUFFLElBQUk7UUFDaEIsc0JBQXNCLEVBQUUsS0FBSztLQUM1QjtJQUNMLFNBQVM7UUFDUCxxREFBcUQ7UUFFckQsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDOUMsNkRBQTZEO1FBQzdELHVCQUF1QjtRQUN2Qix1Q0FBdUM7SUFDekMsQ0FBQztDQUNGLENBQUMifQ==