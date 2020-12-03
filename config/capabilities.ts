export const chromeCapabilities = {
     browserName: 'chrome',
     shardTestFiles: true,
     maxInstances: 1,
     chromeOptions: {
          args: [
               //'headless',
               'start-maximized',
               'enable-automation',
               '--window-size=1920,1080',
               '--no-sandbox',
               '--disable-infobars',
               '--disable-dev-shm-usage',
               '--disable-browser-side-navigation',
               '--disable-gpu',
               '--disable-infobars',
               '--disable-extensions',
               'verbose',
               'log-path=/tmp/chromedriver.log',
               'enable-features=NetworkServiceInProcess'
          ],
          prefs: {
               'credentials_enable_service': false,
               'profile': {
                    'password_manager_enabled': false
               },
               'safebrowsing.enabled': true
          }
     }
};
