import { Locator, Page } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

export class RegisterPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly confirmPassword: Locator;
  readonly submitButton: Locator;

  constructor(page) {
    this.page = page;
    this.emailField = page.locator('[placeholder="Enter your Email address"]');
    this.passwordField = page.locator('[placeholder="Enter your Password"]');
    this.confirmPassword = page.locator(
      '[placeholder="Confirm your Password"]'
    );
    this.submitButton = page.locator("data-testid=submitButton");
  }
  async enterValidCredentials(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.confirmPassword.fill(password);
  }
  async enterInvalidCredentials() {
    let wrongEmail = "test.test.me";
    let wrongPassword = "wrong_pass";
    let wrongConfirmPassword = "wrong_confirm_pass";
    await this.emailField.fill(wrongEmail);
    await this.passwordField.fill(wrongPassword);
    await this.confirmPassword.fill(wrongConfirmPassword);
  }
  async clickSubmit() {
    this.submitButton.click();
    await this.page.waitForNavigation();
  }
}
