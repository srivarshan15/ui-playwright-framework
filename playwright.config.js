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
    screenshot: 'only-on-failure',// if test fails then only screenshot will be taken and stored in the output folder
    video: 'retain-on-failure',// if test fails then only video will be recorded and stored in the output folder
    trace: 'on-first-retry'// if test fails then only trace will be recorded and stored in the output folder
  },
});