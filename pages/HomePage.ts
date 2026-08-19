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

    this.productName = page.locator('[data-test="product-name"]');
    this.productPrice = page.locator('[data-test="unit-price"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.addToFavoritesButton = page.locator(
      '[data-test="add-to-favorites"]'
    );
  }

  async open(): Promise<void> {
    await this.page.goto('https://practicesoftwaretesting.com');
  }

  async openProduct(productName: string): Promise<void> {
    await this.page.getByText(productName, { exact: true }).click();
  }
}