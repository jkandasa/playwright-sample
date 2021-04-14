const { takeScreenshot } = require("../utils")

describe("test_suite_1", () => {
  beforeAll(async () => {
    await page.goto("https://whatismybrowser.com/")
  })

  test(
    "test1",
    async () => {
      await takeScreenshot(page, "page_1")
    },
    1000 * 60 * 10
  )
})
