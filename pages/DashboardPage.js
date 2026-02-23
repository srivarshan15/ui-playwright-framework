class DashboardPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading');
    this.dashboardText = page.getByText('Dashboard UpgradeMin Thanh');
    this.dashboardLink = page.getByRole('link', { name: 'Dashboard' });
  }

  async isDashboardVisible() {
    return await this.heading.textContent();
  }

  async isDashboardTextVisible() {
    return await this.dashboardText.isVisible();
  }

  async isDashboardLinkSelected() {
    return await this.dashboardLink.isSelected();
  }
}

module.exports = DashboardPage;