import { Locator, Page } from "@playwright/test";

export class ExplanationPage {
  readonly page: Page;
  readonly continueButton: Locator;

  constructor(page) {
    this.page = page;
    this.continueButton = page.locator("data-testid=overviewContinueButton");
  }
  async goToResidencePage() {
    await this.continueButton.click();
    await this.page.waitForNavigation();
  }
}
