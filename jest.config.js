const getContextOptions = () => {
  const options = {
    ignoreHTTPSErrors: true,
    viewport: {
      height: 1080,
      width: 1920,
    },
  }

  if (process.env.RECORD_VIDEO === "true") {
    options.recordVideo = {
      dir: "logs/videos",
      size: { width: 1920, height: 1080 },
    }
  }

  return options
}

module.exports = {
  preset: "jest-playwright-preset",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "UI tests",
        outputDirectory: "logs",
        outputName: "result_junit.xml",
        uniqueOutputName: "false",
        classNameTemplate: "{classname}",
        titleTemplate: "{classname.title}",
        ancestorSeparator: " › ",
        usePathForSuiteName: "true",
      },
    ],
  ],
  testEnvironment: "./custom_environment.js",
  testEnvironmentOptions: {
    "jest-playwright": {
      launchOptions: {
        headless: process.env.HEADLESS === "false" ? false : true,
      },
      connectOptions: {
        timeout: 60000,
      },
      contextOptions: getContextOptions(),
      browsers: ["chromium"],
      exitOnPageError: true,
    },
  },
}
