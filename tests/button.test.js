import { test, expect } from '@playwright/test'

test('testing english button', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  // Click on the 'England' button
  await page.getByRole('button', { name: 'England' }).click()

  // Expect the text 'Trusted.' inside an <h2> tag to be present on the page
  await expect(page.locator('h2', { hasText: 'Trusted.' })).toBeVisible()
  // Expect the text 'Reviwer: Jane and John Doe' inside an <p> tag to be present on the page
  await expect(
    page.locator('p', { hasText: 'Reviwer: Jane and John Doe' })
  ).toBeVisible()

  // Expect the text 'Location: London' inside an <p> tag to be present on the page
  await expect(page.locator('p', { hasText: 'Location: London' })).toBeVisible()

  // Expect the text 'Business Name: Fireplace Palace' inside an <p> tag to be present on the page
  await expect(
    page.locator('p', { hasText: 'Business Name: Fireplace Palace' })
  ).toBeVisible()

  // Expect the text 'Outstanding craftsmanship and attention to detail. Our living room has never felt so cozy. Thank you, Fireplace Palace! inside an <p> tag to be present on the page
  await expect(
    page.locator('p', {
      hasText:
        'Outstanding craftsmanship and attention to detail. Our living room has never felt so cozy. Thank you, Fireplace Palace!',
    })
  ).toBeVisible()
})

//test welsh button
test('testing welsh button', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  // Click on the 'welsh' button
  await page.getByRole('button', { name: 'Wales' }).click()

  // Expect the text 'Reviwer: Jane and John Doe' inside an <p> tag to be present on the page
  await expect(
    page.locator('p', { hasText: 'Reviwer: Gwen and Huw' })
  ).toBeVisible()

  // Expect the text 'Location: London' inside an <p> tag to be present on the page
  await expect(page.locator('p', { hasText: 'Location: Cardiff' })).toBeVisible()

  // Expect the text 'Business Name: Fireplace Palace' inside an <p> tag to be present on the page
  await expect(
    page.locator('p', { hasText: 'Business Name: Fireplace Palace' })
  ).toBeVisible()


  // Expect the text 'Outstanding craftsmanship and attention to detail. Our living room has never felt so cozy. Thank you, Fireplace Palace! inside an <p> tag to be present on the page
  await expect(
    page.locator('p', {
      hasText:
        'The installation process was smooth and the end result is simply beautiful. We love our new fireplace!',
    })
  ).toBeVisible()
})

//test scottish button
test('testing scottish button', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  // Click on the 'welsh' button
  await page.getByRole('button', { name: 'Scotland' }).click()

  // Expect the text 'Reviwer: Jane and John Doe' inside an <p> tag to be present on the page
  await expect(
    page.locator('p', { hasText: 'Reviwer: Amy Mcdonald' })
  ).toBeVisible()

  // Expect the text 'Location: London' inside an <p> tag to be present on the page
  await expect(page.locator('p', { hasText: 'Location: Inverness' })).toBeVisible()

  // Expect the text 'Business Name: Fireplace Palace' inside an <p> tag to be present on the page
  await expect(
    page.locator('p', { hasText: 'Business Name: Fireplace Palace' })
  ).toBeVisible()


  // Expect the text 'Outstanding craftsmanship and attention to detail. Our living room has never felt so cozy. Thank you, Fireplace Palace! inside an <p> tag to be present on the page
  await expect(
    page.locator('p', {
      hasText:
        `We couldn't be happier with our new fireplace - Mike and Mandy came recommended but we were still blown away by the quality of service. 😊 🏆`,
    })
  ).toBeVisible()
})
