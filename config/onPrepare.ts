import { browser } from 'protractor';

export class OnPrepare {
     async setupBrowser() {
          await browser.driver.manage().window().maximize();
          await browser.driver.manage().timeouts().implicitlyWait(500);
     }
}
