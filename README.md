Getting Started
Clone Repository

1. Fork this repository
1. git clone https://github.com/maheshpatnam/ckwebdriverio.git
2. Navigate to webdrivercucumber
Install the dependencies:

npm install (it will create node_modules folder in root project and download all required dependencies)

Run tests:

npm test 
Key Features
- Cucumber BDD framework
- Page Object Design pattern
- Allure Report



# Folder structure
```

  └───features                 It has all feature files
  └───pages                    It has all pages object files with selectors and functions 
  └───steps                    It has all step definitions for feature files
  └───utils                    It has helper functions.
  
```
# Installation and 🏃 run test with webdriverio

Clone the repo locally.

`npm install`

`npm test --cucumberOpts.tagExpression=@login`

### Following points can be improved in future :

- Continous Integration.
- Allure report with screenshots and videos if required.
- Impliemnations of fixtures.
- Add test selectors instead of using classes.(Need to check front end code base).
- Retry on failure.
- Run on different browser.
- Parallelism and sharding.
- Eslint and Prettier etc.
- we need to add IDs also in FE code base for QA
- Running tests in mobile browsers