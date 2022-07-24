import { Locator, Page } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

export class ResidencePage {
  readonly page: Page;
  readonly openStateDropdown: Locator;
  readonly firstState: Locator;
  readonly getStartedButton: Locator;

  constructor(page) {
    this.page = page;
    this.openStateDropdown = page.locator(
      '[placeholder="Select State of Residence"]'
    );
    this.firstState = page.locator(
      ".MuiAutocomplete-listbox > li:first-of-type"
    );
    this.getStartedButton = page.locator("text=Get Started");
  }
  async selectState(state: String) {
    await this.openStateDropdown.click();
    await this.page.locator(`text=${state}`).click();
    // await waitTillHTMLRendered(this.page);
  }

  async goToConcernsPage() {
    await this.getStartedButton.click();
    await waitTillHTMLRendered(this.page);
  }
}
