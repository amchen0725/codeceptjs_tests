# codeceptjs_tests
`codeceptjs_tests` is a easy demo of codeceptjs framework(Puppeteer)

## Table of Contents
* [setup](#setup)
* [Test Execution](#test-execution)

## setup
Install all dependence   
```
npm install
npm install --only=dev
```

## Test Execution
1. cd into the root of the repo
2. run tests using command:
    ```
    npm run test
    OR
    npx codeceptjs run --steps
    ```
3. after running, the report show on report folder. Using command `allure serve report` to view allure report.

Note: If you want to see html report, please run tests with command `npx codeceptjs run --reporter mochawesome`. The html report show on `mochawesome-report` folder.