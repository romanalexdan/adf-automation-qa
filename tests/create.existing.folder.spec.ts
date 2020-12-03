import { it } from "mocha";
import { CreateFolderModal } from "../page-objects/createFolderModal";
import { DashboardPage } from "../page-objects/dashboard";
import { Toast } from "../page-objects/toast";
import { LoginFlow } from "../user-flows/loginFlow";
import { credentials, folderDescription, existingFolderName } from './login.test.data';
import "./afterEach";
import { assert } from "chai";
import { Dashboard } from "../user-flows/dashboard";

describe('ADF Demo App', function () {

     before(async function () {
          await new LoginFlow().login(credentials);
          await new Dashboard().createFolder(existingFolderName, folderDescription);
     });

     after(async function () {
          await new Dashboard().deleteFolder(existingFolderName);
     });

     it('create with existing folder name', async function () {
          const dashboardPage = new DashboardPage();

          await dashboardPage.clickNewButton();
          await dashboardPage.selectNewActionOption('Create Folder');

          const modal = new CreateFolderModal();

          await modal.setName(existingFolderName);
          await modal.setDescription(folderDescription);
          await modal.clickCreate();

          const isModalDisplayed = await modal.isDisplayed();
          const toast = await new Toast().getToastMessage();

          await modal.clickCancel();
          assert.strictEqual('There\'s already a folder with this name. Try a different name.', toast, 'Create action was complete.');
          assert.isTrue(isModalDisplayed, 'Modal should be displayed.')
     });
});