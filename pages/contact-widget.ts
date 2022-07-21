import { Locator, Page } from "@playwright/test";

export class ContactWidget {
  readonly page: Page;
  readonly contactWidgetButton: Locator;

  constructor(page) {
    this.page = page;
    this.contactWidgetButton = page.locator("data-testid=contactWidgetButton");
  }
  async clickContactWidget() {
    await this.contactWidgetButton.click();
  }
}
