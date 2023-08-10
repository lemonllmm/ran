import { expect, test } from '@playwright/test'

const TIME_OUT = 1000

test('button', ({ page }) => {
  setTimeout(async () => {
    page.goto('http://localhost:5124/')
    // await page.waitForLoadState('domcontentloaded')
    await page.waitForLoadState('load')
    // await page.waitForLoadState('networkidle')
    await expect(page).toHaveTitle(/ranui/)
    await page.evaluate(() => {
      const component = document.createElement('r-button')
      component.role = 'button'
      component.innerText = 'Submit'
      document.body.appendChild(component)
    })
    await page.getByRole('button', { name: /submit/i }).click()
    await expect(page.getByRole('button', { name: /submit/i })).toBeVisible()
  }, TIME_OUT)
})