import data from '../../fixtures/locators.json'

export default (action: 'click' | 'doubleClick', element: any) => {
    var locator: any = JSON.stringify((<any>data).locator)
    locator=JSON.parse(locator)
    const selector = cy.get(locator[element],{timeout:10000}).scrollIntoView()
    const method = (action === 'click') ? 'click' : 'dblclick';
    selector[method]();
};