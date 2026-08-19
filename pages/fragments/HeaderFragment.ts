import { Locator, Page } from '@playwright/test';

export class HeaderFragment {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly userName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.userName = page.getByRole('menuitem', { name: 'Jane Doe' });
  }
}