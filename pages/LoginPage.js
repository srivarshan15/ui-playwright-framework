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
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorAlert.textContent();
  }
}

module.exports = LoginPage;