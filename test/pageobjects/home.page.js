import { $, driver } from '@wdio/globals'

class HomePage {

    async openMenu(menu) {
        console.log('>>> 1 - PROCURANDO:', `tab-${menu}`)

        const element = await $(`id:tab-${menu}`)

        console.log('>>> 2 - ELEMENTO CRIADO')

        console.log('>>> 3 - EXISTE:', await element.isExisting())

        console.log('>>> 4 - ESPERANDO ELEMENTO FICAR VISÍVEL')

        await element.waitForDisplayed({
            timeout: 10000
        })

        console.log('>>> 5 - ELEMENTO VISÍVEL')

        await element.click()

        console.log('>>> 6 - CLICK REALIZADO')
    }

    async search() {
        await $(`-ios predicate string:name ENDSWITH "Search Products"`).click()
    }
}

export default new HomePage()