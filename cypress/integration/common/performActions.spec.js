import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import openWebsite from '../../support/actions/openWebsite'
import clickElement from '../../support/actions/clickElement'
import setText from '../../support/actions/setText'

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

When(
    /^I (click|doubleclick) on the element "([^"]*)?"$/,
    clickElement
);

When(
    /^I enter "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setText
);
