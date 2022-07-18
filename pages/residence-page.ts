import { Locator, Page } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

export class ResidencePage {
  readonly page: Page;
  readonly selectStateDropdown: Locator;
  readonly firstState: Locator;
  readonly getStartedButton: Locator;

  constructor(page) {
    this.page = page;
    this.selectStateDropdown = page.locator(".MuiOutlinedInput-root");
    this.firstState = page.locator(
      ".MuiAutocomplete-listbox > li:first-of-type"
    );
    this.getStartedButton = page.locator("text=Get Started");
  }
  async selectFirstState() {
    await this.selectStateDropdown.click();
    await this.firstState.click();
    // await waitTillHTMLRendered(this.page);
  }

  async goToConcernsPage() {
    await this.getStartedButton.click();
    await waitTillHTMLRendered(this.page);
  }
}
