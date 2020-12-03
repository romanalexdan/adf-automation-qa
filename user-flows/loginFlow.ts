import { DashboardPage } from "../page-objects/dashboard";
import { LoginPage } from "../page-objects/login";

export class LoginFlow {

     async login({ username, password }) {
          const login = new LoginPage();

          await login.goTo();
          await login.setUserName(username);
          await login.setPassword(password);
          await login.clickSignIn();

          if (!await new DashboardPage().isLoggedIn()) {
               throw new Error('Login failed!.');
          }
     }
}