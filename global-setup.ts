import { chromium } from '@playwright/test'
import { getUrl, Pages } from 'src/urls'
import { getCredentials, Users } from 'src/credentials'

const globalSetup = async (): Promise<void> => {
  const { username, password } = getCredentials(Users.INVALID)
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(getUrl(Pages.LOGIN))
  await page.fill('[data-e2e="username"]', username)
  await page.fill('[data-e2e="password"]', password)
  await page.click('[data-e2e="login-button"]')
  await page.context().storageState({ path: 'session/authenticated.json' })
  await browser.close()
}

export default globalSetup