# Automation UI and API testing framework with Cypress

Gagan Chikkegowda

This repo contains an example with the tests written in Cypress using Cucumber

This was done on MacOS.

I have used Visual Studio code for coding purposes.

I have Github Desktop installed.

I have Node installed.

### Dependencies:

Node.

cypress.

cypress-cucumber-preprocessor.

### How to:

If you want to experiment with running this project, you'll need to fork it first.
After forking this project in Github, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress_challenge

## cd into the cloned repo
cd cypress_challenge

## install the node_modules
npm install

## run below command to run the test headless
npm run cy:run:api
npm run cy:run:ui

## run below command to run the test using cypress test runner
npm run onpm run cy:open:api
npm run onpm run cy:open:ui

## run below command to generate reports
npm run generate:cucumber:report

```

## Output HTML

Cucmber Report: cypress/report/html_simple/cucumber-htmlreport.html

## Additions/improvements:

Continuous Integration

Random Data Geneartion

Configuration improvements

Custom command incorporation

## Reference:

(https://docs.cypress.io/examples/examples/tutorials.html#Best-Practices)
