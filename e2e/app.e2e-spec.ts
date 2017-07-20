import { MyShoppingAppPage } from './app.po';

describe('my-shopping-app App', () => {
  let page: MyShoppingAppPage;

  beforeEach(() => {
    page = new MyShoppingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
