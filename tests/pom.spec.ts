import test, { expect, Page } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { ExplanationPage } from "../pages/explanation-page";
import { ResidencePage } from "../pages/residence-page";
import { ConcernsPage } from "../pages/concerns-page";
import { RegisterPage } from "../pages/registration-page";
import { ContactWidget } from "../pages/contact-widget";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../pages/login-page";
import { PersonalInfoPage } from "../pages/personal-info-page";

test.describe("home page functionality", async () => {
  let validEmail: string;
  let validPassword: string;
  test.beforeAll(async () => {
    validEmail = faker.internet.email("bruce", "willis");
    validPassword = "Password1!";
  });
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
    await residencePage.selectState("New Jersey");
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
    await registerPage.enterValidCredentials(validEmail, validPassword);
    await registerPage.clickSubmit();
    await expect(page).toHaveScreenshot({ fullPage: true });
    await loginPage.login(validEmail, validPassword);
    await expect(page).toHaveScreenshot({ fullPage: true });
    await personalInfoPage.enterCaregiverInfo("asd", "acv", "xcv");
    await expect(page).toHaveScreenshot({ fullPage: true });
    await page.waitForTimeout(1000);
  });
  test.skip("login flow", async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const personalInfoPage = new PersonalInfoPage(page);

    await page.goto("/");
    page.on("console", (message) => {
      console.log(message);
    });
    page.on("pageerror", (err) => {
      console.log(err.message);
    });
    console.error("ERROR");
    await homePage.goToLogin();
    await loginPage.login(validEmail, validPassword);
    await page.waitForTimeout(1000);
  });
});
