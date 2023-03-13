import { click, setText, isElementDisplayed } from "../utils/commands";
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddressPage extends Page {

    /**
    * define selectors using getter methods
    */
    public get btnMyaccount() {
        return $('//span[text()="Mijn account"]');
    }

    public get btnNewAddress() {
        return $('button[data-testid="create-address-pvh-icon-button"]');
    }
    public get inputFirstName() {
        return $('#firstName-Bform');
    }
    public get inputlastName() {
        return $('#lastName-Bform');
    }

    public get inputStreet() {
        return $('#address1-Bform');
    }

    public get inputHouseNumber() {
        return $('#address2-Bform');
    }

    public get inputCity() {
        return $('#city-Bform');
    }

    public get inputZipcode() {
        return $('#zipCode-Bform');
    }

    public get selectCountryDropDown() {
        return $('#downshift-2-input');
    }

    public get selectBillingAddressDropDown() {
        return $('#downshift-1-input');
    }

    public get btnSaveNewAddress() {
        return $('button[data-testid="address-form-add-pvh-button"]');
    }
    public get notificationNewAddress() {
        return $('#success-alert-content');
    }

    public get anchorAddress() {
        return $('a[href*="addresses"]');
    }
    public get newAddress() {
        return $('section[data-testid="pvh-content-switch-card"]');
    }
    public get btnMenGender() {
        return $('[data-testid] [data-testid="pvh-ToggleButton"]:nth-of-type(2)');
    }
    public get btnAddNewAddress() {
        return $('button[data-testid="create-address-pvh-icon-button"]');
    }


    /**
     * function to add new address
     * @param firstName 
     * @param lastName 
     * @param streetName 
     * @param houseNumber 
     * @param cityName 
     * @param zipcode 
     */
    public async addNewAddress(firstName: string, lastName: string, streetName: string, houseNumber: string, cityName: string, zipcode: string, countryName: string, billingAddress: string) {
        await this.btnMyaccount.waitForClickable();
        await click(this.btnMyaccount);
        await click(this.anchorAddress);
        await click(this.btnAddNewAddress);
        await click(this.btnMenGender);
        await setText(this.inputFirstName, firstName);
        await setText(this.inputlastName, lastName);
        await setText(this.inputStreet, streetName);
        await setText(this.inputHouseNumber, houseNumber);
        await setText(this.inputCity, cityName);
        await setText(this.inputZipcode, zipcode);
        await click(this.selectCountryDropDown);
        await this.selectCountry()
        await click(this.btnSaveNewAddress);
    }

    /**
     * function to check newly added address message
     * @param successmessage 
     */
    public async verifyNewAddressAddedMessage(successmessage: string) {
        await isElementDisplayed(this.notificationNewAddress);
        expect(await this.notificationNewAddress.getText()).toEqual(successmessage)
    }

    /**
     *  function to select country
     */
    public async selectCountry() {
        const countryDropdown = await browser.$('#downshift-2-menu');
        const firstCountry = await countryDropdown.$('#downshift-2-item-1');
        await firstCountry.click();
    }

    /**
     * function to check whether address is added
     */
    public async isNewAddressDisplayed() {
        await isElementDisplayed(this.newAddress);
    }

    /**
     * function to open url
     */
    async open() {
        await super.open('/myaccount/addresses');
    }
}

export default new AddressPage();
