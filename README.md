# Playwright Automation Project

## Overview
This project contains UI automation test scripts developed using **Playwright** with **TypeScript**.

# Prerequisites
Before getting started, ensure the following are installed on your system:

- Node.js (v18 or later)
- npm (comes with Node.js)
- Visual Studio Code (Recommended)

# Verify the installation:
```bash
node -v
npm -v
```
# Creating a New Playwright Project
If you are creating a **new Playwright project** from scratch, run:
```bash
npm init playwright@latest
```
During the setup, Playwright will prompt you to:

- Choose the project location
- Select JavaScript or TypeScript
- Add GitHub Actions (optional)
- Install Playwright browsers

Follow the prompts to complete the project setup.

# Cloning an Existing Repository
If the project already exists in GitHub, clone it using:

```bash
git clone <repository-url>
cd <project-folder>
```
# Install Project Dependencies
Install all required Node.js packages:
```bash
npm install
```

Install the Playwright browser binaries:
```bash
npx playwright install
```

# Project Structure
```text
project-root
│
├── tests/
│   ├── login.spec.ts
│   └── example.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```
# Running Playwright Tests

## Run all tests
```bash
npx playwright test
```

## Run a specific test file
```bash
npx playwright test tests/login.spec.ts
```
or
```bash
npx playwright test login.spec.ts
```

## Run tests in headed mode
```bash
npx playwright test --headed
```

## Run tests in UI mode
```bash
npx playwright test --ui
```

## Run tests only in Chromium
```bash
npx playwright test --project=chromium
```

# View Test Report
After test execution, open the HTML report using:

```bash
npx playwright show-report
```

# Common Playwright Commands
| Command | Description |
|----------|-------------|
| `npm init playwright@latest` | Create a new Playwright project |
| `npm install` | Install project dependencies |
| `npx playwright install` | Install Playwright browsers |
| `npx playwright test` | Execute all test scripts |
| `npx playwright test tests/login.spec.ts` | Execute a specific test file |
| `npx playwright test --headed` | Execute tests in headed mode |
| `npx playwright test --ui` | Open Playwright UI Mode |
| `npx playwright test --project=chromium` | Execute tests only in the Chromium browser |
| `npx playwright show-report` | Open the Playwright HTML report |


# Technology Stack

- Playwright
- TypeScript
- Node.js
- npm
- Visual Studio Code

# Author
**Your Name**
  - Aravindan R R


# Notes

- Use `npm init playwright@latest` only when creating a new Playwright project.
- If you clone an existing repository, simply run:
  ```bash
  npm install
  npx playwright install
  ```
- Ensure the required browsers are installed before executing tests.
- View the execution report after every test run using:
  ```bash
  npx playwright show-report
  ```