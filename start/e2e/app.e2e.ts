import { ItcampPage } from './app.po';

describe('itcamp App', function() {
  let page: ItcampPage;

  beforeEach(() => {
    page = new ItcampPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('itcamp works!');
  });
});
