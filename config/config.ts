import { chromeCapabilities } from './capabilities';
import { OnPrepare } from './onPrepare';
import { BeforeLaunch } from './beforeLaunch';
import { params } from './applicationParams';


export let config = {
    beforeLaunch: () => {
        new BeforeLaunch().setupReporters();
    },
    onPrepare: async () => {
        await new OnPrepare().setupBrowser();
    },
    specs: [
        '../tests/**/*.spec.js'
    ],

    params: params,
    directConnect: true,
    allScriptsTimeout: 50000,
    framework: 'mocha',
    mochaOpts: {
        slow: 90000,
        timeout: 180000,
        reporter: 'mocha-multi',
        compilers: [
            'tsconfig-paths/register'
        ]
    },

    capabilities: chromeCapabilities
};