import { TestProductSelectorPage } from './app.po';

describe('test-product-selector App', () => {
  let page: TestProductSelectorPage;

  beforeEach(() => {
    page = new TestProductSelectorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
