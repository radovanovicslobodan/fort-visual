import { Locator, Page } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

export class ConcernsPage {
  readonly page: Page;
  readonly firstConcern: Locator;
  readonly lastConcern: Locator;
  readonly continueButton: Locator;
  readonly nextButton: Locator;

  constructor(page) {
    this.page = page;
    this.firstConcern = page.locator(
      ".MuiFormGroup-root > button:first-of-type"
    );
    this.lastConcern = page.locator(".MuiFormGroup-root > button:last-of-type");
    this.continueButton = page.locator("text=Continue");
    this.nextButton = page.locator("text=Next");
  }
  async selectFirstConcern() {
    await this.firstConcern.click();
  }
  async selectLastConcern() {
    await this.lastConcern.click();
  }
  async continue() {
    await this.continueButton.click();
    await waitTillHTMLRendered(this.page);
  }
  async next() {
    await this.nextButton.click();
    await waitTillHTMLRendered(this.page);
  }
}
