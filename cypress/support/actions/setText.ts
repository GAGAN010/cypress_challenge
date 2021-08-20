
import data from '../../fixtures/locators.json'

export default (value: string, element: string) => {

    let locator: any = JSON.stringify((<any>data).locator)
    locator = JSON.parse(locator)
    cy.wait(500)
    const selector = cy.get(locator[element],{timeout: 10000}).scrollIntoView().should('be.visible')
    let checkValue = value;
    if (!value) {
        checkValue = '';
    }
    
    selector.type(checkValue);
};