import { test, expect } from '@playwright/test'

test('testing name input', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('link', { name: 'Here' }).click()
  await page.getByRole('link', { name: 'Here' }).click()

  // expect to go to booking page
  // Wait for navigation to complete
  await page.waitForNavigation()

  // Assert that the current URL is the booking page
  expect(page.url()).toBe('http://localhost:3000/booking')
  await page.locator('input[name="fullName"]').click()
  await page.locator('input[name="fullName"]').fill('kieran paget')

  await page
    .getByRole('button', { name: 'Request Design Consultation' })
    .click()

  await expect(
    page.locator('p', {
      hasText:
        'Full name must contain only alphabetical characters and include both a first and last name.',
    })
  ).toBeVisible()
})
