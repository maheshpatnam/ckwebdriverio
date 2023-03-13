import { BeforeAll, Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';

BeforeAll(async () => {
    // Navigate to the website and accept cookies
    await LoginPage.open();
});

When(/^I enter invalid (.+) or (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password);
});

Then(/^I should see an error (.+)$/, async (message) => {
    await LoginPage.verifyErrorMessages(message)
});

Given(/^I am on the login page$/, async () => {
    await LoginPage.verifyLoginPage();
});

When(/^I enter valid (.+) and (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password);
});

Then(/^I should be redirected to the home page$/, async () => {
    await HomePage.verifyLoginSuccess();
});
