import { ProjetoPage } from './app.po';

describe('projeto App', () => {
  let page: ProjetoPage;

  beforeEach(() => {
    page = new ProjetoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
