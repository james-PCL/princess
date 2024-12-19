import reporter from 'cucumber-html-reporter';
import 'dotenv/config';

const options = {
    theme: 'bootstrap',
    jsonFile: process.env.REPORT+'featureReport.json',
    output: process.env.REPORT+'featureReport.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "BROWSER": process.env.BROWSER,
        "PLATFORM": process.platform,
        "BASE_URL": process.env.BASE_URL
    }
};

reporter.generate(options);