import { browser } from 'protractor';

afterEach(async function () {
     if (this.currentTest && this.currentTest.state === 'failed') {
          await attachScreenshot();
          await attachBrowserLogs();
     }
});

export async function createAllureAttachments(test: Mocha.Context) {
     if (test.currentTest && test.currentTest.state === 'failed') {
          await attachScreenshot();
          await attachBrowserLogs();
     }
}

async function attachScreenshot() {
     try {
          const png = await browser.takeScreenshot();

          allure.createAttachment('Screenshot', Buffer.alloc(png.length, png, 'base64'), 'image/png');
     }
     catch (e) {
          console.log(e);
     }
}

async function attachBrowserLogs() {
     try {
          const log = await browser.driver.manage().logs().get('browser'),
               logString = log
                    .map(item => {
                         const date = new Date(item.timestamp);

                         return `${date.toISOString()} ${item.level.name}: ${item.message}`;
                    }).join('\n\n');

          if (logString) allure.createAttachment('Browser log', logString, 'text/plain');
     }
     catch (e) {
          console.log(e);
     }
}
