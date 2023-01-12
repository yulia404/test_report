import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: 'src/',
  reporter: [['line'], ['html'], ['allure-playwright', {outputFolder: 'allure-result'}]],
  globalSetup: require.resolve('./global-setup'),
  // retries: 2,
  timeout: 60000,
  use: {
    viewport: { width: 1366, height: 768 },
    hasTouch: true,
    browserName: 'chromium',
    storageState: 'session/authenticated.json',
  },
}

export default config