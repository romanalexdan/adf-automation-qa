import { CreateFolderModal } from "../page-objects/createFolderModal";
import { DashboardPage } from "../page-objects/dashboard";

export class Dashboard {
     async deleteFolder(folderName: string) {
          const dashboardPage = new DashboardPage();

          await dashboardPage.selectRow(folderName);
          await dashboardPage.openMoreActions();
          await dashboardPage.clickDelete();
     }

     async createFolder(name: string, description: string) {
          const dashboardPage = new DashboardPage();

          await dashboardPage.clickNewButton();
          await dashboardPage.selectNewActionOption('Create Folder');

          const modal = new CreateFolderModal();

          await modal.setName(name);
          await modal.setDescription(description);
          await modal.clickCreate();
     }
}