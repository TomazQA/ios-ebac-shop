import { generalConf } from './general.conf.js'

export let browserstackConf = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    hostname: 'hub.browserstack.com',

    services: [
        [
            'browserstack',
            {
                buildIdentifier: '#${BUILD_NUMBER}'
            }
        ]
    ],

    capabilities: [
        {
            platformName: 'iOS',
            'appium:app': 'bs://bced0b02d064faa6f903ff2766034a98c2ad70d3',
            'appium:deviceName': 'iPhone 13',
            'appium:platformVersion': '17',
            'appium:automationName': 'XCUITest',

            'bstack:options': {
                projectName: 'EBAC Shop',
                buildName: 'ebac-shop-mobile-ci',
                sessionName: 'Ebac Shop - Login',
                deviceOrientation: 'portrait',
                debug: true,
                networkLogs: true
            }
        }
    ],

    maxInstances: 1,

    ...generalConf
}
