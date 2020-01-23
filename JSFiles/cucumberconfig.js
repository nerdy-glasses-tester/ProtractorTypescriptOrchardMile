"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
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
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.driver.get("https://orchardmile.com");
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
                "App Version": "1.0",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0MsaUVBQW1EO0FBR3hDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBRUQsS0FBSyxFQUFFLENBQUMsaUNBQWlDLENBQUM7SUFDMUMsWUFBWSxFQUFFO1FBQ1YsMEJBQTBCO1FBQzFCLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsMEJBQTBCO1FBQzFCLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO0tBQ3ZDO0lBQ0QsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNaLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLG9CQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBRWIsSUFBSSxPQUFPLEdBQUc7WUFDTixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsb0JBQW9CLEVBQUUsZ0JBQWdCO1lBQ3RDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsS0FBSztnQkFDbkIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FFSixDQUFDIn0=