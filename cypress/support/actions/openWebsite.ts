
export default (type: 'url' | 'site', page: string) => {
    const url = (type === 'url') ? page :  Cypress.config().baseUrl;;
    cy.visit(url);
};