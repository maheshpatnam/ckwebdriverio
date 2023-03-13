import { When, Then } from '@wdio/cucumber-framework';
import AddressPage from '../pages/add-address.page';

When(/^I add a new address with all personal details firstname (.+) lastname (.+) streetname (.+) housenumber (.+) city (.+) postalcode (.+) country (.+) and billingaddress (.+)$/, async (firstname, lastname, streetname, housenumber, city, postalcode, country, billingaddress) => {
    await AddressPage.addNewAddress(firstname, lastname, streetname, housenumber, city, postalcode, country, billingaddress);
});
Then(/^I should see the new address in my address book with success message (.+)$/, async (message) => {
    await AddressPage.verifyNewAddressAddedMessage(message)
    await AddressPage.isNewAddressDisplayed()
});