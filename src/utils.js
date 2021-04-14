const screenshotFunc = async (page, suffix) => {
  await page.screenshot({ path: `logs/screenshot/screen_${suffix}.png` })
}

module.exports = { takeScreenshot: screenshotFunc }
