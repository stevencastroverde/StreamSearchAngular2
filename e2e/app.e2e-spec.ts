import { StreamSearchPage } from './app.po';

describe('stream-search App', () => {
  let page: StreamSearchPage;

  beforeEach(() => {
    page = new StreamSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
