import { click, setText, isElementDisplayed } from '../utils/commands';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    /**
    * define selectors using getter methods
    */
    public get inputUsername() {
        return $('input[id="logonId"]');
    }

    public get btnLogin() {
        return $('//button[contains(text(),"Aanmelden")]');
    }

    public get inputPassword() {
        return $('input[id="logonPassword"]');
    }

    public get btnSubmit() {
        return $('//span[text()="Aanmelden"]');
    }
    public get btnAcceptCookies() {
        return $('//button[text()="accepteer alles"]');
    }
    public get msgInvalidEmailIdOrPassword() {
        return $('//p[contains(text(),"gebruikersnaam en wachtwoord")]');
    }

    /**
     * Function to perform login  
     * @param username 
     * @param password 
     */
    public async login(username: string, password: string) {
        await click(this.btnLogin);
        await setText(this.inputUsername, username);
        await setText(this.inputPassword, password);
        await click(this.btnSubmit);
    }

    /**
     * function to accept cookies button
     */
    public async acceptCookies() {
        await click(this.btnAcceptCookies);
    }

    /**
     * function to check whether error message is displayed or not
     */
    public async verifyErrorMessages(invalidLoginmessage: string) {
        await isElementDisplayed(this.msgInvalidEmailIdOrPassword);
        expect(await this.msgInvalidEmailIdOrPassword.getText()).toEqual(invalidLoginmessage);
        await browser.refresh()
    }

    /**
     * verify login page is displayed or not
     */
    public async verifyLoginPage() {
        await isElementDisplayed(this.btnLogin);
    }
    /**
     * function to open url
     */
    async open() {
        await super.open('/heren');
        await browser.maximizeWindow();
        await this.acceptCookies();
    }
}

export default new LoginPage();
