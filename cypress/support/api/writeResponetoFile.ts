export default (
    alias: any,
    responseFilename: string,
) => {
     cy.get(alias).then((response:any) => {
    cy.writeFile("cypress/fixtures/" + responseFilename + ".json", response.body);
  });
}

