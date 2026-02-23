import { test, expect } from '@playwright/test';
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.goto();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle('OrangeHRM');
  await loginPage.companyBranding.waitFor();
  await expect(loginPage.companyBranding).toBeVisible();
  await expect(loginPage.usernameLabel).toBeVisible();
  await expect(loginPage.passwordLabel).toBeVisible();
  await loginPage.login('Admin', 'admin123');
  await dashboardPage.heading.waitFor();
  await expect(dashboardPage.heading).toContainText('Dashboard');
});

test('Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await expect(loginPage.companyBranding).toBeVisible();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle('OrangeHRM');
  await loginPage.companyBranding.waitFor();
  await loginPage.usernameLabel.click();
  await loginPage.passwordLabel.click();
  await loginPage.login('wrongName', 'wrongPassword');
  await loginPage.errorAlert.click();
  await expect(loginPage.errorAlert).toContainText('Invalid credentials');
});