import { BeforeAll, Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import AddressPage from '../pages/add-address.page';

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

When(/^I add a new address with all personal details firstname (.+) lastname (.+) streetname (.+) housenumber (.+) city (.+) postalcode (.+) country (.+) and billingaddress (.+)$/, async (firstname: string, lastname: string, streetname: string, housenumber: string, city: string, postalcode: string, country: string, billingaddress: string) => {
    await AddressPage.addNewAddress(firstname, lastname, streetname, housenumber, city, postalcode, country, billingaddress)
});

Then(/^I should see the new address in my address book with success message (.+)$/, async (message) => {
    await AddressPage.verifyNewAddressAddedMessage(message)
    await AddressPage.isNewAddressDisplayed()
});



Given(/^I am on the login page$/, async () => {
    await LoginPage.verifyLoginPage();
});

When(/^I enter valid (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

When(/^I logout from website$/, async () => {
    await HomePage.logout();
});

Then(/^I should be redirected to the home page$/, async () => {
    await HomePage.verifyLoginSuccess();
});

Then(/^I should be redirected to the login page$/, async () => {
    await LoginPage.verifyLoginPage();
});