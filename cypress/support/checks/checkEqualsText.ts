
import data from '../../fixtures/locators.json'

export default (
    element: string,
    falseCase: boolean,
    expectedText: string
) => {
 var locator: any = JSON.stringify((<any>data).locator)
    locator=JSON.parse(locator)
    let parsedExpectedText = expectedText;
    let boolFalseCase = !!falseCase;

    // Check for empty element
    if (typeof parsedExpectedText === 'function') {
        parsedExpectedText = '';

        boolFalseCase = !boolFalseCase;
    }

    if (parsedExpectedText === undefined && falseCase === undefined) {
        parsedExpectedText = '';
        boolFalseCase = true;
    }

    const selector = cy.get(locator[element],{timeout: 10000}).should('be.visible').scrollIntoView()


    if (boolFalseCase) {
        selector.should('not.have.text',parsedExpectedText)
    } else {
        selector.should('have.text',parsedExpectedText)
    }
};