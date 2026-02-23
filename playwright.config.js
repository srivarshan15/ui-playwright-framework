const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 40000,
  expect: {
    timeout: 10*1000, // assertion level timeout by default it is 5 seconds, we can override it by using this property
  },
  reporter: 'html',
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
});