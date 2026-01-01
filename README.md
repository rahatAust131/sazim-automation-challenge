## Playwright Folder Structure:

teebay-playwright-automation/
│
├── playwright.config.js
├── package.json
├── README.md
│
├── tests/
│   ├── auth/
│   │   ├── login.spec.js
│   │   └── registration.spec.js
│   │
│   ├── account/
│   │   └── updateAccount.spec.js
│   │
│   ├── products/
│   │   ├── productCRUD.spec.js
│   │   ├── browseProducts.spec.js
│   │   └── buyRentProduct.spec.js
│   │
│   └── fixtures/
│       └── testData.js
│
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── RegistrationPage.js
│   ├── AccountPage.js
│   ├── ProductPage.js
│   ├── BrowsePage.js
│   └── CheckoutPage.js
│
├── utils/
│   ├── authHelper.js
│   ├── waitHelpers.js
│   └── assertions.js
│
├── reports/
│   └── html-report/
│
└── .gitignore
