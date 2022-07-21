import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { ExplanationPage } from "../pages/explanation-page";
import { ResidencePage } from "../pages/residence-page";
import { ConcernsPage } from "../pages/concerns-page";
import { RegisterPage } from "../pages/register-page";
import { ContactWidget } from "../pages/contact-widget";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../pages/login-page";
import { PersonalInfoPage } from "../pages/personal-info-page";

const validEmail = faker.internet.email();
const validPassword = "Password1!";

test("home page tests", async ({ page }) => {
  const homePage = new HomePage(page);
  const explanationPage = new ExplanationPage(page);
  const residencePage = new ResidencePage(page);
  const concernsPage = new ConcernsPage(page);
  const registerPage = new RegisterPage(page);
  const contactWidget = new ContactWidget(page);
  const loginPage = new LoginPage(page);
  const personalInfoPage = new PersonalInfoPage(page);

  await page.goto("/");
  await homePage.goToExplanationPage();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await contactWidget.clickContactWidget();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await contactWidget.clickContactWidget();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await explanationPage.goToResidencePage();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await residencePage.selectFirstState();
  await residencePage.goToConcernsPage();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await concernsPage.selectFirstConcern();
  await concernsPage.continue();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await concernsPage.selectFirstConcern();
  await concernsPage.continue();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await concernsPage.selectLastConcern();
  await concernsPage.next();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await registerPage.enterInvalidCredentials();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await registerPage.enterValidCredentials(validEmail);
  await registerPage.clickSubmit();
  // await expect(page).toHaveScreenshot({ fullPage: true });
  // await loginPage.login(validEmail, validPassword);
  // await expect(page).toHaveScreenshot({ fullPage: true });
  // await personalInfoPage.enterCaregiverInfo();
  // await expect(page).toHaveScreenshot({ fullPage: true });
  await page.waitForTimeout(3000);
});
test("login flow", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await page.goto("/");
  await homePage.goToLogin();
  await loginPage.login("email sample", "password sample");
  await page.waitForTimeout(10000);
});
