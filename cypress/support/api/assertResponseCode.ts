export default (
    alias: any,
    respCode: string,
    
) => {
    cy.get(alias).then((response:any) => {
        expect(response.status).to.eq(parseInt(respCode));
    });
}