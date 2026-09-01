import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Login application', function () {

    this.timeout(180000)

    it('should login with valid credentials', async () => {
        let profileTab = driver.isAndroid ? 'profile' : 'Account'

        console.log('>>> ABRINDO ACCOUNT')

        await homePage.openMenu(profileTab)

        console.log('>>> ACCOUNT ABERTO')

        const pageSource = await driver.getPageSource()

        console.log(
            pageSource
                .split('\n')
                .filter(line => /email|e-mail|textField|secureTextField/i.test(line))
                .join('\n')
        )

        console.log('>>> FAZENDO LOGIN')

        await loginPage.login(
            'cliente@ebac.art.br',
            'GD*peToHNJ1#c$sgk08EaYJQ'
        )

        console.log('>>> LOGIN FINALIZADO')

        const pageSourceAfterLogin = await driver.getPageSource()

        console.log('========== AFTER LOGIN ==========')
        console.log(pageSourceAfterLogin)
        console.log('========== END AFTER LOGIN ==========')
    })
})