import { browser } from "protractor";
import { WaitUtilities } from "../utilities/waitUtilities";

export class LoginPage {

     async goTo() {
          await browser.get('https://4ovcw1kj.trials.alfresco.com/');
     }

     async setUserName(userName: string) {
          const userNameInput = await browser.$('#username');
          await new WaitUtilities().waitAndSendKeys(userNameInput, userName);
     }

     async setPassword(password: string) {
          const passwordInput = await browser.$('#password');
          await new WaitUtilities().waitAndSendKeys(passwordInput, password);
     }

     async clickSignIn() {
          const signInButton = await browser.$('#login-button');
          await new WaitUtilities().waitAndClick(signInButton);
     }
}