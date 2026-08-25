import { Locator, Page } from '@playwright/test';
import { HeaderFragment } from './fragments/HeaderFragment';

export class HomePage {
  readonly page: Page;
  readonly header: HeaderFragment;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly addToCartButton: Locator;
  readonly addToFavoritesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);

    this.productName = page.getByTestId('product-name');
    this.productPrice = page.getByTestId('unit-price');
    this.addToCartButton = page.getByTestId('add-to-cart');
    this.addToFavoritesButton = page.getByTestId(
      'add-to-favorites'
    );
  }

  async open(): Promise<void> {
  await this.page.goto('/');
}

  async openProduct(productName: string): Promise<void> {
    await this.page.getByText(productName, { exact: true }).click();
  }
}