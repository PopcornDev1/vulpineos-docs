async (page) => {
  const env = typeof process !== 'undefined' && process?.env ? process.env : {}
  const baseURL = env.VULPINE_DOCS_SMOKE_URL || 'http://127.0.0.1:3000'
  const desktopPath = env.VULPINE_LANDING_DESKTOP_SCREENSHOT || '/tmp/vulpineos-landing-desktop.png'
  const mobilePath = env.VULPINE_LANDING_MOBILE_SCREENSHOT || '/tmp/vulpineos-landing-mobile.png'

  const assertLanding = async () => {
    await page.getByRole('heading', { name: /The runtime built/i }).waitFor()
    await page.getByRole('link', { name: /^API Docs$/i }).first().waitFor()
    const title = await page.title()
    if (!title.includes('VulpineOS')) {
      throw new Error(`unexpected landing title: ${title}`)
    }
  }

  await page.setViewportSize({ width: 1440, height: 960 })
  await page.goto(baseURL, { waitUntil: 'domcontentloaded' })
  await page.waitForLoadState('networkidle')
  await assertLanding()
  await page.locator('main').screenshot({ path: desktopPath })

  await page.setViewportSize({ width: 393, height: 852 })
  await page.goto(baseURL, { waitUntil: 'domcontentloaded' })
  await page.waitForLoadState('networkidle')
  await assertLanding()
  await page.locator('main').screenshot({ path: mobilePath })

  return {
    ok: true,
    page: 'landing-fixtures',
    url: page.url(),
    desktopPath,
    mobilePath,
  }
}
