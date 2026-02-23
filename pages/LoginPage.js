const logger = require('../utils/logger');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.companyBranding = page.getByRole('img', { name: 'company-branding' });
    this.usernameLabel = page.locator('div').filter({ hasText: /^Username$/ }).nth(1);
    this.passwordLabel = page.locator('div').filter({ hasText: /^Password$/ }).nth(1);
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorAlert = page.getByRole('alert');
    this.passswordAlert = page.locator('[class*=oxd-input-field-error-message]');
  }

  async goto() {
    logger.info('Navigating to login page');
    try {
      await this.page.goto('/');
    } catch (error) {
      logger.error(`Error navigating to login page: ${error}`);
      throw error;
    }
  }

  async login(username, password) {
    logger.info(`Attempting login with username: ${username}`);
    try {
      await this.usernameInput.click();
      await this.usernameInput.fill(username);
      await this.passwordInput.click();
      await this.passwordInput.fill(password);
      await this.loginButton.click();
      logger.info('Login button clicked');
    } catch (error) {
      logger.error(`Error during login: ${error}`);
      throw error;
    }
  }

    async enterUserName(username) {
    logger.info(`Entering username: ${username}`);
    try {
      await this.usernameInput.click();
      await this.usernameInput.fill(username);
      logger.info('Login button clicked');
    } catch (error) {
      logger.error(`Error during login: ${error}`);
      throw error;
    }
  }

   async clickLoginButton() {
    logger.info(`Clicking login button`);
    try {
      await this.loginButton.click();
      logger.info('Login button clicked');
    } catch (error) {
      logger.error(`Error during login: ${error}`);
      throw error;
    }
  }



  async getErrorMessage() {
    try {
      const errorMsg = await this.errorAlert.textContent();
      logger.warn(`Login error message: ${errorMsg}`);
      return errorMsg;
    } catch (error) {
      logger.error(`Error retrieving login error message: ${error}`);
      throw error;
    }
  }
}

module.exports = LoginPage;