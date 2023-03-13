import { click, isElementDisplayed } from '../utils/commands';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    /**
    * define selectors using getter methods
    */
    public get btnMyaccount() {
        return $('.header-account__name');
    }
    public get btnLogout() {
        return $('.ck-Button.account-flyout__signout-button');
    }

    /**
     * function to check login success
     */
    public async verifyLoginSuccess() {
        await this.btnMyaccount.waitForClickable({ timeout: 5000 });
        await isElementDisplayed(this.btnMyaccount);
    }

    /**
     * function to logout
     */
    public async logout() {
        await this.btnMyaccount.waitForClickable({ timeout: 5000 });
        await click(this.btnMyaccount);
        await click(this.btnLogout);
    }

    /**
     * function to open url
     */
    async open() {
        await super.open('/heren');
    }
}

export default new HomePage();
