import { it } from "mocha";
import { DashboardPage } from "../page-objects/dashboard";
import "./afterEach";
import { assert } from "chai";
import { LoginPage } from "../page-objects/login";

describe('ADF Demo App', function () {
     it('open dashboard', async function () {
          const loginPage = new LoginPage();

          await loginPage.goTo();
          assert.isTrue(await new DashboardPage().isLoggedIn(), 'Should be at dashboard page.');
     });
});