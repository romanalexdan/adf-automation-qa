# Alfresco ADF automation QA exercise

## Requirements

- download and install https://nodejs.org/en/download/ and https://www.java.com/En/download/

## Structure

1. configuration folder:
     - contains all project configuration elements like reporters, test runners configuration, and specs to run.
     - contains browser capabilities configuration
     - contains browser/driver hooks
     - contains application parameters
2. page-objects folder contains different application pages class definitions and simple methods
3. user-flows folder for defining different user flows and page interactions
4. utilities folder for wait helper methods
5. tests folder for all the spec files and test data

The solution is constructed like a real life framework scenarios with reporting capabilities, simple to use commands and flexible.
The framework can be extended to run multiple capabilities or parallel tests, by appending a new configuration file for the desired scenario
and changing the config.js file to use the desired capability by applying a flag than can be a local or deployment variable or an argument
to the run sequence.

## Installation:

- after cloning the project run *npm install* command
- the command should get all needed packages and dependencies

## Run test command:

```
npm test // to run all the specs
npm run allure // to generate Allure reports
npm run allure-open // to open the Allure report
```
