export default class Page {
    async open(url: string) {
        await browser.url(url);
    }
}