import { Locator, Page } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

export class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly getStartedButton: Locator;

  constructor(page) {
    this.page = page;
    this.loginButton = page.locator("data-testid=btnTestSignIn");
    this.getStartedButton = page.locator(
      "data-testid=btnTestOverviewNavigation"
    );
  }
  async goToExplanationPage() {
    await this.getStartedButton.click();
    await waitTillHTMLRendered(this.page);
  }
}
