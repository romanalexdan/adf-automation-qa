import { rmdir } from 'fs';
import { normalize } from 'path';

const allurePath = normalize(__dirname + './../../allure-results');
const reportsPath = normalize(__dirname + './../../reports');

export class BeforeLaunch {
     setupReporters() {
          process.env.multi = 'list=- mocha-proshot=- mocha-allure-reporter=- mocha-custom-reporter=-';
          process.env.PROSHOT_DIR = './reports/screenshots';
          require('ts-node').register({ files: true });
          rmdir(allurePath, { recursive: true }, (err) => {
               if (err) {
                    throw err;
               }
          });
          rmdir(reportsPath, { recursive: true }, (err) => {
               if (err) {
                    throw err;
               }
          });
     }
}
