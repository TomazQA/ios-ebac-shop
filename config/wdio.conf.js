import 'dotenv/config';

import { localConf } from './local.conf.js'
import { sauceConf } from './sauce.conf.js'
import { browserstackConf } from './browserstack.conf.js'

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case 'local':
            return localConf
        case 'saucelabs':
            return sauceConf
        case 'browserstack':
            return browserstackConf
    }
}

export const config = getConfig()
