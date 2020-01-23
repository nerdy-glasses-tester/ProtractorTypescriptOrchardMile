import {Config, browser} from "protractor";

export let config: Config = {

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
  onPrepare () {
    //browser.resetUrl = 'about:blank'; //Need for Safari

    browser.driver.manage().window().maximize();
    browser.driver.get("https://orchardmile.com");
    //browser.driver.manage().timeouts().setScriptTimeout(10000);
    // for non-angular page
    //browser.ignoreSynchronization = true;
  }
};