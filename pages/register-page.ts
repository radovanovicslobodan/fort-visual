import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class RegisterPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly confirmPassword: Locator;

  constructor(page) {
    this.page = page;
    this.emailField = page.locator('[placeholder="Enter your Email address"]');
    this.passwordField = page.locator('[placeholder="Enter your Password"]');
    this.confirmPassword = page.locator(
      '[placeholder="Confirm your Password"]'
    );
  }
  async enterCredentials() {
    let password = faker.internet.password();
    await this.emailField.fill(faker.internet.email());
    await this.passwordField.fill(password);
    await this.confirmPassword.fill(password);
  }
}
