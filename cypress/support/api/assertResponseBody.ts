
export default (
  alias: any,
  response: any
) => {
     cy.fixture(response).then((sresponse:any) => {
      cy.get(alias).should((response1:any) => {
        expect(response1.body).to.include(sresponse);
      });
    });
    
}
