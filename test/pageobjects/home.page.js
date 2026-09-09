import { $, driver } from '@wdio/globals'

class HomePage {

    async openMenu(menu) {
        console.log('>>> 1 - PROCURANDO:', `tab-${menu}`)

        const element = await $(`id:tab-${menu}`)

        console.log('>>> 2 - ELEMENTO CRIADO')
        console.log('>>> 3 - EXISTE:', await element.isExisting())

        await element.waitForDisplayed({
            timeout: 10000
        })

        console.log('>>> 5 - ELEMENTO VISÍVEL')

        const location = await element.getLocation()
        const size = await element.getSize()

        console.log('>>> LOCATION:', location)
        console.log('>>> SIZE:', size)

        console.log('>>> 6 - TENTANDO TAP NATIVO')

        await driver.execute('mobile: tap', {
            x: Math.round(location.x + size.width / 2),
            y: Math.round(location.y + size.height / 2)
        })

        console.log('>>> 7 - TAP REALIZADO')
    }

    async search() {
        await $(`-ios predicate string:name ENDSWITH "Search Products"`).click()
    }
}

export default new HomePage()