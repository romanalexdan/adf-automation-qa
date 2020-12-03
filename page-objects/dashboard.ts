import { browser, by, element, ElementFinder } from "protractor";
import { WaitUtilities } from "../utilities/waitUtilities";

export class DashboardPage {

     async isLoggedIn() {
          try {
               const currentUser: ElementFinder = await browser.$('.current-user__full-name');
               await new WaitUtilities().waitIsVisible(currentUser, 5000);
               return await currentUser.isDisplayed();
          }
          catch {
               return false;
          }
     }

     async clickNewButton() {
          const newButton = await browser.$('[data-automation-id="create-button"]');
          await new WaitUtilities().waitIsClickable(newButton);
     }

     async selectNewActionOption(optionName: string) {
          const option = await element(by.xpath(`//span[text()="${optionName}"]/..`));
          await new WaitUtilities().waitIsClickable(option);
     }
}