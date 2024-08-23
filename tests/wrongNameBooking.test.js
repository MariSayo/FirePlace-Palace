import { test, expect } from '@playwright/test'

test('testing name input', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('link', { name: 'Here' }).click()

  // expect to go to booking page
  // Wait for navigation to complete
  await page.waitForNavigation()

  // Assert that the current URL is the booking page
  expect(page.url()).toBe('http://localhost:3000/booking')
  // click the fullname input field
  await page.locator('input[name="fullName"]').click()
  //fill it with incorrect data
  await page.locator('input[name="fullName"]').fill('kieran')
  // submit
  await page
    .getByRole('button', { name: 'Request Design Consultation' })
    .click()
  // expect error to be thrown
  await expect(
    page.locator('p', {
      hasText:
        'Full name must contain only alphabetical characters and include both a first and last name.',
    })
  ).toBeVisible()
})
