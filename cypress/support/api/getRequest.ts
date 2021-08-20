export default (
    url: any,
    apikey: string,
    rresponse: any
) => {
   cy.request({
      method: "GET",
      url: url,
      failOnStatusCode: false,
      qs: {
        appid: apikey,
      },
    }).as(rresponse);
};
