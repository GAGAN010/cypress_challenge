export default (
    expectedText: string
) => {
 
    cy.on('window:alert', (text) => {
        cy.wait(1000)
        expect(text).equal(expectedText)
    })

};