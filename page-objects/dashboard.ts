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

     async isFolderDisplayed(folderName: string) {
          try {
               const row: ElementFinder = await element(by.xpath(`//span[@data-automation-id="adf-name-column"][contains(text(),"${folderName}")]/../../../../../../../../..`));
               await new WaitUtilities().waitIsVisible(row);
               return await row.isDisplayed();
          } catch {
               return false;
          }
     }

     async selectRow(rowName: string) {
          const row = await element(by.xpath(`//span[@data-automation-id="adf-name-column"][contains(text(),"${rowName}")]/../../../../../../../../..`));
          const cell = await row.$('.adf-datatable-cell--image');

          await new WaitUtilities().waitAndClick(cell);
     }

     async openMoreActions() {
          const moreActionsButton = await browser.$('[id="app.toolbar.more"]');

          await new WaitUtilities().waitAndClick(moreActionsButton, 5000);
     }

     async clickDelete() {
          const deleteButton = await browser.$('[id="app.toolbar.delete"]');

          await new WaitUtilities().waitAndClick(deleteButton);
     }

     async clickNewButton() {
          const newButton = await browser.$('[data-automation-id="create-button"]');
          await new WaitUtilities().waitAndClick(newButton);
     }

     async selectNewActionOption(optionName: string) {
          const option = await element(by.xpath(`//span[text()="${optionName}"]/..`));
          await new WaitUtilities().waitAndClick(option);
     }
}
