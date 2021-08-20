import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import getRequest from '../../support/api/getRequest'
import postRequest from '../../support/api/postRequest'
import assertResponseCode from '../../support/api/assertResponseCode'
import assertResponseBody from '../../support/api/assertResponseBody'
import writeResponsetoFile from '../../support/api/writeResponetoFile'
import extractValue from '../../support/api/extractValue'

Given(
    /^I post the "([^"]*)?" to "([^"]*)?" using "([^"]*)?" and record response "([^"]*)?"$/,
    postRequest
)

Given(
    /^I get "([^"]*)?" using "([^"]*)?" and record response "([^"]*)?"$/,
    getRequest
)

Then(
    /^I verify that for sent request "([^"]*)?" HTTP response code is "([^"]*)?"$/,
assertResponseCode
);

Then(
    /^I verify that for sent request "([^"]*)?" HTTP response body contains "([^"]*)?"$/,
assertResponseBody
);

Then(
    /^I write response body captured in "([^"]*)?" to a "([^"]*)?" file$/,
    writeResponsetoFile
)

Then(
    /^I get the "([^"]*)?" from the "([^"]*)?"$/,
    extractValue
)