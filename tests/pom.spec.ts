import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { ExplanationPage } from "../pages/explanation-page";
import { ResidencePage } from "../pages/residence-page";
import { ConcernsPage } from "../pages/concerns-page";
import { RegisterPage } from "../pages/register-page";

test("home page tests", async ({ page }) => {
  const homePage = new HomePage(page);
  const explanationpage = new ExplanationPage(page);
  const residencePage = new ResidencePage(page);
  const concernsPage = new ConcernsPage(page);
  const registerPage = new RegisterPage(page);

  await page.goto("/");
  await homePage.goToExplanationPage();
  // await waitTillHTMLRendered(page);
  await expect(page).toHaveScreenshot({ fullPage: true });
  await explanationpage.goToResidencePage();
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
  await registerPage.enterCredentials();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.waitForTimeout(3000);
});
