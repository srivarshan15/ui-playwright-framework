const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 40000,
  expect: {
    timeout: 10*1000,
  },
  reporter: 'html',
  projects: [
    {
      name: 'UI',
      testDir: './tests/ui',
      use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com/',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
      },
    },
    {
      name: 'API',
      testDir: './tests/api',
      use: {
        baseURL: 'https://jsonplaceholder.typicode.com',
        headless: true,
      },
    },
  ],
});