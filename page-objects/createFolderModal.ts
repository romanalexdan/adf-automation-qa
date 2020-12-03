import { browser, ElementFinder } from "protractor";
import { WaitUtilities } from "../utilities/waitUtilities";

export class CreateFolderModal {

     async setName(name: string) {
          const nameFiled = await browser.$('#adf-folder-name-input');

          await new WaitUtilities().waitAndSendKeys(nameFiled, name);
     }

     async setDescription(description: string) {
          const descriptionFiled = await browser.$('#adf-folder-description-input');

          await new WaitUtilities().waitAndSendKeys(descriptionFiled, description);
     }

     async clickCreate() {
          const createButton = await browser.$('#adf-folder-create-button');

          await new WaitUtilities().waitAndClick(createButton);
     }

     async clickCancel() {
          const cancelButton = await browser.$('#adf-folder-cancel-button');

          await new WaitUtilities().waitAndClick(cancelButton);
     }

     async isDisplayed() {
          try {
               const cancelButton: ElementFinder = await browser.$('#adf-folder-cancel-button');

               return await cancelButton.isDisplayed();
          } catch {
               return false;
          }

     }
}