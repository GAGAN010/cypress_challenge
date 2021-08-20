import checkEqualsText from '../../support/checks/checkEqualsText'
import checkIfElementExists from '../../support/checks/checkIfElementExists';
import checkAlertEqualsText from '../../support/checks/checkAlertEqualsText'

Then(
    /^I expect that element "([^"]*)?"( not)* have the text "([^"]*)?"$/,
    checkEqualsText
);

Then(
    /^I expect that element "([^"]*)?" does( not)* exist$/,
    checkIfElementExists
);

Then(
    /^I expect that window alert have the text "([^"]*)?"$/,
    checkAlertEqualsText
);