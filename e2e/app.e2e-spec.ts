import { MyWebPage } from './app.po';

describe('my-web App', () => {
  let page: MyWebPage;

  beforeEach(() => {
    page = new MyWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
