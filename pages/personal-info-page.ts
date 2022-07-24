import { Locator, Page } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

export class PersonalInfoPage {
  readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly openRelationshipDropdown: Locator;
  readonly firstRelationship: Locator;
  readonly birthdateField: Locator;
  readonly nextButton: Locator;

  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('[placeholder="Enter your First Name"]');
    this.lastNameField = page.locator('[placeholder="Enter your Last Name"]');
    this.openRelationshipDropdown = page.locator(
      '[placeholder="Select Relationship with Child"]'
    );
    this.firstRelationship = page.locator("text=Father");
    this.birthdateField = page.locator('[placeholder="mm\\/dd\\/yyyy"]');
    this.nextButton = page.locator("data-testid=nextCaregiverBtn");
  }
  async enterCaregiverInfo(
    caregiverFirstName: string,
    caregiverLastName: string,
    caregiverBirthdate: string
  ) {
    await this.firstNameField.fill(caregiverFirstName);
    await this.lastNameField.fill(caregiverLastName);
    await this.openRelationshipDropdown.click();
    await this.firstRelationship.click();
    await this.birthdateField.fill(caregiverBirthdate);
    await this.nextButton.click();
    await waitTillHTMLRendered(this.page);
  }
}
