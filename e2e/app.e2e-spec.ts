import { AdminDashboardAngular2Page } from './app.po';

describe('admin-dashboard-angular2 App', () => {
  let page: AdminDashboardAngular2Page;

  beforeEach(() => {
    page = new AdminDashboardAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
