const logger = require('../utils/logger');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading');
    this.dashboardText = page.getByText('Dashboard UpgradeMin Thanh');
    this.dashboardLink = page.getByRole('link', { name: 'Dashboard' });
  }


  async isDashboardVisible() {
    try {
      const text = await this.heading.textContent();
      logger.info(`Dashboard heading text: ${text}`);
      return text;
    } catch (error) {
      logger.error(`Error checking dashboard heading: ${error}`);
      throw error;
    }
  }


  async isDashboardTextVisible() {
    try {
      const visible = await this.dashboardText.isVisible();
      logger.info(`Dashboard text visibility: ${visible}`);
      return visible;
    } catch (error) {
      logger.error(`Error checking dashboard text visibility: ${error}`);
      throw error;
    }
  }


  async isDashboardLinkSelected() {
    try {
      const selected = await this.dashboardLink.isSelected();
      logger.info(`Dashboard link selected: ${selected}`);
      return selected;
    } catch (error) {
      logger.error(`Error checking dashboard link selection: ${error}`);
      throw error;
    }
  }
}

module.exports = DashboardPage;