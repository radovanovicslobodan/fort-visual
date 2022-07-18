import { test } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

test("mobile emulation", async ({ page }, workerInfo) => {
  await page.goto("/");
  await waitTillHTMLRendered(page);
  await page.screenshot({
    path: `./screenshots/${workerInfo.project.name}-homepage.png`,
    fullPage: true,
  });
  await page.locator("text=Get Started").click();
  await waitTillHTMLRendered(page);
  await page.screenshot({
    path: `./screenshots/${workerInfo.project.name}-explanationpage.png`,
    fullPage: true,
  });
  await page.locator("data-testid=overviewContinueButton").click();
  await waitTillHTMLRendered(page);
  await page.screenshot({
    path: `./screenshots/${workerInfo.project.name}-residencepage.png`,
    fullPage: true,
  });
});
