import { faker } from "@faker-js/faker";
import { Locator, Page } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

export class PersonalInfoPage {
  readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly selectRelationshipDropdown: Locator;
  readonly firstRelationship: Locator;
  readonly birthdateField: Locator;
  readonly nextButton: Locator;

  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('[placeholder="Enter your First Name"]');
    this.lastNameField = page.locator('[placeholder="Enter your Last Name"]');
    this.selectRelationshipDropdown = page.locator(".MuiOutlinedInput-root");
    this.firstRelationship = page.locator(
      ".MuiAutocomplete-listbox > li:first-of-type"
    );
    this.birthdateField = page.locator("data-testid=caregiverBirthdate", {
      has: page.locator("input"),
    });
    this.nextButton = page.locator("data-testid=nextCaregiverBtn");
  }
  async enterCaregiverInfo() {
    await this.firstNameField.fill(faker.name.firstName());
    await this.lastNameField.fill(faker.name.lastName());
    await this.selectRelationshipDropdown.click();
    await this.firstRelationship.click();
    await this.birthdateField.fill("01/01/1990");
    await this.nextButton.click();
    await waitTillHTMLRendered(this.page);
  }
}
