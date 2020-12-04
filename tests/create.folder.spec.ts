import { it } from "mocha";
import { CreateFolderModal } from "../page-objects/createFolderModal";
import { DashboardPage } from "../page-objects/dashboard";
import { LoginFlow } from "../user-flows/loginFlow";
import { credentials, folderName, folderDescription } from './login.test.data';
import "./afterEach";
import { assert } from "chai";
import { Dashboard } from "../user-flows/dashboard";

describe('ADF Demo App', function () {

     before(async function () {
          await new LoginFlow().login(credentials);
     });

     after(async function () {
          await new Dashboard().deleteFolder(folderName);
     });

     it('create new folder', async function () {
          const dashboardPage = new DashboardPage();

          await dashboardPage.clickNewButton();
          await dashboardPage.selectNewActionOption('Create Folder');

          const modal = new CreateFolderModal();
          const displayedModal = await modal.isDisplayed();

          await modal.setName(folderName);
          await modal.setDescription(folderDescription);
          await modal.clickCreate();

          const isFolderCreated = await dashboardPage.isFolderDisplayed(folderName);
          const hiddenModal = await modal.isDisplayed();

          assert.isTrue(isFolderCreated, `Folder ${folderName} was not created.`);
          assert.isTrue(displayedModal, 'Modal should be visible');
          assert.isFalse(hiddenModal, 'Modal should not be visible');
     });
});