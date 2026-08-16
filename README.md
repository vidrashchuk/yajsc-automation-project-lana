# yajsc-automation-project-lana
yajsc course automation project using playwright

# Playwright Automation Project

This project contains automated tests written using Playwright and TypeScript.

Technologies
Playwright
TypeScript
Node.js
Prerequisites

Make sure you have Node.js and npm installed.

# Check the installed versions:

node -v
npm -v
Installation

# Clone the repository:

git clone https://github.com/vidrashchuk/yajsc-automation-project-lana.git

# Navigate to the project folder:

cd yajsc-automation-project-lana

# Install project dependencies:

npm install

# Install Playwright browsers:

npx playwright install

# On Linux, you may also need to install browser dependencies:

sudo npx playwright install-deps
# Running Tests

# Run all tests:

npx playwright test

# Run tests using Chromium only:

npx playwright test --project=chromium

# Run tests in headed mode to see the browser:

npx playwright test --project=chromium --headed

# Run a specific test file:

npx playwright test tests/login.spec.ts --project=chromium
# Test Report

# After running the tests, open the HTML report with:

npx playwright show-report
# Test Scenario

# The project currently contains a login test that verifies:

Login with valid credentials
Successful navigation to the account page
The "My account" heading is displayed
The logged-in user "Jane Doe" is displayed in the navigation bar