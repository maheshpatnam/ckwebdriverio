import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../src/pages/login.page';
import HomePage from '../../src/pages/home.page';
import AddressPage from '../../src/pages/add-address.page';

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
    await LoginPage.acceptCookies()
    await browser.deleteCookies()
});

When(/^I enter valid (.+) and (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password)
});

Then(/^I should be redirected to the home page$/, async () => {
    await HomePage.verifyLoginSuccess()
});

When(/^I enter invalid (.+) or (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password)
});

Then(/^I should see an error (.+)$/, async (message) => {
    await LoginPage.verifyErrorMessages(message)
});

When(/^I add a new address with all personal details firstname (.+) lastname (.+) streetname (.+) housenumber (.+) city (.+) postalcode (.+) country (.+) and billingaddress (.+)$/, async (firstname: string, lastname: string, streetname: string, housenumber: string, city: string, postalcode: string, country: string, billingaddress: string) => {
    await AddressPage.addNewAddress(firstname, lastname, streetname, housenumber, city, postalcode, country, billingaddress)
});

Then(/^I should see a success message (.+)$/, async (message: string) => {
    await AddressPage.verifyNewAddressAddedMessage(message)
});

Then(/^the new address should be added to my address book$/, async () => {
    await AddressPage.isNewAddressDisplayed()
});