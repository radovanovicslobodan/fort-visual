import test from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { ExplanationPage } from "../pages/explanation-page";
import { ResidencePage } from "../pages/residence-page";
import { ConcernsPage } from "../pages/concerns-page";

test("home page tests", async ({ page }) => {
  const homePage = new HomePage(page);
  const explanationpage = new ExplanationPage(page);
  const residencePage = new ResidencePage(page);
  const concernsPage = new ConcernsPage(page);

  await page.goto("/");
  await homePage.goToExplanationPage();
  await explanationpage.goToResidencePage();
  await residencePage.selectFirstState();
  await residencePage.goToConcernsPage();
  await concernsPage.selectFirstConcern();
  await concernsPage.continue();
  await concernsPage.selectFirstConcern();
  await concernsPage.continue();
  await concernsPage.selectLastConcern();
  await concernsPage.next();
  await page.waitForTimeout(3000);
});
