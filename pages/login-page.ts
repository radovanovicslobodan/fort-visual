import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page) {
    this.page = page;
    this.emailField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.loginButton = page.locator("#kc-login");
  }
  async login(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
