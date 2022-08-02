const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*.spec.js',
  output: 'report',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1920x1200',
      chrome: {
        args: [
          // '--no-sandbox',
          // '--disable-gpu',
          // '--disable-setuid-sandbox',
          // '--font-render-hinting=medium',
          // '--lang=zh',
          '--window-size=1920,1200',
          '--disable-features=site-per-process',
      ]
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir: 'mochawesome-report'
    }
  },
  name: 'codeceptjs_tests',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  }
}
