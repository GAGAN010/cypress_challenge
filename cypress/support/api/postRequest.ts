export default (
    req: any,
    url: any,
    apikey: string,
    rresponse: any
) => {
  cy.fixture(req).then((request) => {
    cy.request({
      method: "POST",
      url: url,
      body: request,
      failOnStatusCode: false,
      headers: {
        "Content-Type": "application/json",
      },
      qs: {
        appid: apikey,
      },
    }).as(rresponse);
  });
};

