import { KvikkdugnadPage } from './app.po';

describe('kvikkdugnad App', () => {
  let page: KvikkdugnadPage;

  beforeEach(() => {
    page = new KvikkdugnadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
