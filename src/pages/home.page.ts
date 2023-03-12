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
        return $('button[data-testid="HeaderAccount-myaccount-button"]');
    }

    public get inputSearch() {
        return $('input[data-testid="searchInputDesktop-inputField"]');
    }

    public get btnWishlist() {
        return $('a[href*="wishlist"]');
    }

    /**
     * function to check whether search is displayed or not
     */
    public async checkSearch() {
        await isElementDisplayed(this.inputSearch);
    }

     /**
     * function click on my account
     */
    public async openMyAccount() {
        await click(this.btnMyaccount)
    }

    /**
     * function to check login success
     */
    public async verifyLoginSuccess() {
        await isElementDisplayed(this.btnMyaccount);
    }

    async open() {
        await super.open('/heren');
    }
}

export default new HomePage();
