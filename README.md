# Alfresco ADF automation QA exercise

## Requirements

- download and install https://nodejs.org/en/download/ and https://www.java.com/En/download/

## Structure

1. configuration folder:
     - contains all project configuration elements like reporters, test runners, and specs.
     - contains capabilities configuration
     - contains browser/driver hooks
2. page-objects folder contains different application pages class definitions and simple methods
3. user-flows folder for defining different user flows and page interactions
4. utilities folder for wait helper methods
5. tests folder for all the spec files and test data

## Installation:

- after cloning the project run *npm install* command
- the command should get all needed packages and dependencies

## Run test command:

```
npm test // to run the specs added to the wdio.conf.ts configuration file
npm run allure // to generate Allure reports
npm run allure-open // to open the Allure report
```
