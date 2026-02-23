# Playwright UI Automation Framework

## Tech Stack
- Playwright
- Node.js
- GitHub Actions

## Setup
1. Clone the repository:
	```bash
	git clone <repo-url>
	cd ui-playwright-framework
	```
2. Install dependencies:
	```bash
	npm install
	npx playwright install
	```

## Running Tests
Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/login.spec.js
```

## View Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Example Usage
Sample test using page objects:
```javascript
const LoginPage = require('./pages/LoginPage');
const DashboardPage = require('./pages/DashboardPage');

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await expect(dashboardPage.heading).toContainText('Dashboard');
});
```

## CI/CD
Tests run automatically on push/PR via GitHub Actions. See `.github/workflows` for details.