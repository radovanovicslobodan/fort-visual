import { Locator, Page } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

export class BrowseTherapistPage {
  readonly page: Page;
  readonly firstTherapist: Locator;

  constructor(page) {
    this.page = page;
    this.firstTherapist = page.locator("data-testid=bookButton >> nth=0");
  }

  async goToFirstTherapist() {
    this.firstTherapist.click();
    await waitTillHTMLRendered(this.page);
  }
}
