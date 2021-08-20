
import data from '../../fixtures/locators.json'

export default (element: string, falseCase: boolean) => {
    var locator: any = JSON.stringify((<any>data).locator)
    locator=JSON.parse(locator)
    const selector = cy.get(locator[element],{timeout:10000}).scrollIntoView()


     if (falseCase) {
         selector.should('not.be.visible')
    } else {
        selector.should('be.visible')
    }

    
};