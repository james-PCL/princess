import reporter from 'cucumber-html-reporter';
import 'dotenv/config';

const options = {
    theme: 'bootstrap',
    columnLayout: 2,
    jsonFile: 'tmp/featureReport.json',
    output: 'tmp/featureReport.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "BROWSER": process.env.BROWSER,
        "PLATFORM": process.platform,
        "BASE_URL": process.env.BASE_URL,
        "BRANCH": process.env.BRANCH
    }
};

reporter.generate(options);