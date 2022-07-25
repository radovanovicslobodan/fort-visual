import { Locator, Page } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

export class ChildInfoPage {
  readonly page: Page;
  readonly childFirstNameField: Locator;
  readonly childLastNameField: Locator;
  readonly childBirthdateField: Locator;
  readonly childEmail: Locator;
  readonly openSexAtBirthDropdown: Locator;
  readonly firstSexAssigned: Locator;
  readonly openPreferredPronounDropdown: Locator;
  readonly firstPronoun: Locator;
  readonly nextButton: Locator;

  constructor(page) {
    this.page = page;
    this.childFirstNameField = page.locator(
      '[placeholder="Enter your Child\\\'s First Name"]'
    );
    this.childLastNameField = page.locator(
      '[placeholder="Enter your Child\\\'s Last Name"]'
    );
    this.childBirthdateField = page.locator('[placeholder="mm\\/dd\\/yyyy"]');
    this.childEmail = page.locator(
      '[placeholder="Child\\\'s Email for Teletherapy Links"]'
    );
    this.openSexAtBirthDropdown = page.locator(
      '[placeholder="Select Child\\\'s Sex Assigned at Birth"]'
    );
    this.firstSexAssigned = page.locator("text=Female");
    this.openPreferredPronounDropdown = page.locator(
      '[placeholder="Select Child\\\'s Preferred Pronoun"]'
    );
    this.firstPronoun = page.locator("text=She/Her/Her");
    this.nextButton = page.locator('[data-testid="nextChildButton"]');
  }
  async enterChildInfo(
    childFirstName: string,
    childLastName: string,
    childBirthdate: string,
    childEmail: string
  ) {
    await this.childFirstNameField.fill(childFirstName);
    await this.childLastNameField.fill(childLastName);
    await this.childBirthdateField.fill(childBirthdate);
    await this.childEmail.fill(childEmail);
    await this.openSexAtBirthDropdown.click();
    await this.firstSexAssigned.click();
    await this.openPreferredPronounDropdown.click();
    await this.firstPronoun.click();
  }
  async clickSubmit() {
    await this.nextButton.click();
    await waitTillHTMLRendered(this.page);
  }
}
