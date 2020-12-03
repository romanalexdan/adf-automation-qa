import { browser } from "protractor";
import { WaitUtilities } from "../utilities/waitUtilities";

export class Toast {

     async getToastMessage() {
          const bar = await browser.$('simple-snack-bar.ng-star-inserted');
          return new WaitUtilities().waitAndGetText(bar);
     }
}