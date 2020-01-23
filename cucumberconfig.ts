import {Config, browser} from "protractor";
import * as reporter from "cucumber-html-reporter";


export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        browserName: 'chrome'
    },

    specs: ['../Features/orchardmile.feature'],
    cucumberOpts: {
        //tags: "@RemovefromCart",
        format: 'json:./cucumberreport.json',
        //require step definitions
        require: ['./StepsDefinitions/*.js']
    },
    onPrepare: () => {
        browser.driver.manage().window().maximize();
        browser.driver.get("https://orchardmile.com");
    },
    onComplete: () => {
 
        var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreport.json',
                output: './cucumber_report.html',
                screenshotsDirectory: './Screenshots/',
                storeScreenshots: true,
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version":"1.0",
                    "Test Environment": "QA",
                    "Browser": "Chrome 79.0.3945.117",
                    "Platform": "MAC",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
         
            reporter.generate(options);
    }

};