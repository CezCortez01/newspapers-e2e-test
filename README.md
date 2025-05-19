# 📰 Newspapers.com E2E Tests (WebdriverIO + Cucumber)

BDD-style end-to-end tests for Newspapers.com using WebDriverIO  and Page Object Model.

## 📁 Folder Structure
NEWSPAPERS-E2E/
├── features/
│ ├── login.feature # Gherkin scenarios
├── pageobjects/
│ ├── login.page.js # Page Object for Login
├── step-definitions/
│ ├── login.steps.js # Step definitions
├── wdio.conf.js # WDIO configuration


## 🚀 Getting Started

### Install dependencies
```bash
npm install
## 🚀**RUN TEST**
npx wdio run wdio.conf.

🧪 Test Scenarios
✅ Successful login (blocked by captcha) :)
