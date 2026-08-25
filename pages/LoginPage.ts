import { Locator, Page } from '@playwright/test';
import { HeaderFragment } from './fragments/HeaderFragment';

export class LoginPage {
  readonly page: Page;
  readonly header: HeaderFragment;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);

    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-submit');
  }

  async open(): Promise<void> {
    await this.page.goto('/auth/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}