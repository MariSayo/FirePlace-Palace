import { test, expect } from '@playwright/test'

test('navigate and submit form', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('link', { name: 'Here' }).click()


  // expect to go to booking page
  // Wait for navigation to complete
  await page.waitForURL('**/booking')

  // Assert that the current URL is the booking page
  expect(page.url()).toBe('http://localhost:3000/booking');

  //clicking fullname and entering full name details
  await page.locator('input[name="fullName"]').click()
  await page.locator('input[name="fullName"]').fill('Kieran test')

  //clicking postcode and entering postcode details
  await page.locator('input[name="postcode"]').click()
  await page.locator('input[name="postcode"]').fill('CV2 5AG')

  //clicking house address input and entering details
  await page.locator('input[name="house"]').click()
  await page.locator('input[name="house"]').fill('TEST')

  //clicking city input and entering details
  await page.locator('input[name="city"]').click()
  await page.locator('input[name="city"]').fill('TEST')

  //clicking number input and entering details
  await page.locator('input[name="number"]').click()
  await page.locator('input[name="number"]').fill('07445676896')

  //clicking email input and entering details
  await page.locator('input[name="email"]').click()
  await page.locator('input[name="email"]').fill('test@test.com')
  // click submit
  await page
    .getByRole('button', { name: 'Request Design Consultation' })
    .click()

  //checking "we got your booking"
  await expect(
    page.locator('p', { hasText: 'We have got your request we will call you back as soon as possible!' })
  ).toBeVisible()
})
