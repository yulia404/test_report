import { chromium,  expect, test  } from '@playwright/test'
import { getUrl, Pages } from '../src/urls'
import { getCredentials, Users } from '../src/credentials'

test('Отображение метода доставки', async () => {
  const { username, password } = getCredentials(Users.INVALID)
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(getUrl(Pages.LOGIN))
  await page.fill('[data-e2e="username"]', username)
  await page.fill('[data-e2e="password"]', password)
  await page.click('[data-e2e="login-button"]')
  const textNotifyMessage = page.locator('text="Неверный пароль или имя пользователя"').nth(0)
  await expect(textNotifyMessage).toBeVisible()
  await browser.close()
})