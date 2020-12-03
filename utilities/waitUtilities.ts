import { browser, ElementFinder } from "protractor";
import { ExpectedConditions as EC } from 'protractor';

export class WaitUtilities {

     async waitAndClick(element: ElementFinder, timeout = 2000) {
          await this.waitIsClickable(element, timeout);
          await element.click();
     }

     async waitAndSendKeys(element: ElementFinder, text: string, timeout = 2000) {
          await this.waitIsVisible(element, timeout);
          await element.clear();
          await element.sendKeys(text);
     }

     waitIsClickable(element: ElementFinder, timeout = 2000) {
          return browser.wait(EC.elementToBeClickable(element), timeout, `Element isn't clickable after "${timeout}ms"`);
     }

     waitIsVisible(element: ElementFinder, timeout = 2000) {
          return browser.wait(EC.visibilityOf(element), timeout, `Element isn't visible after "${timeout}ms"`);
     }
}