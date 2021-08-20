import { values } from "cypress/types/lodash";

export default (
    key: any ,
    file: string,
    
) => {
   cy.fixture(file).then((response) => {
       let value: any = response[key];
       return value
   });
    
}