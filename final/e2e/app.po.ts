export class ItcampPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('itcamp-app h1')).getText();
  }
}
