import { expect, test } from "@playwright/test";
import { waitTillHTMLRendered } from "../utils/waiters";

test("mobile emulation", async ({ page }) => {
  await page.goto("/");
  await waitTillHTMLRendered(page);
  await expect(page).toHaveScreenshot();
  await page.locator("text=Get Started").click();
  await waitTillHTMLRendered(page);
  await expect(page).toHaveScreenshot();
  await page.locator("data-testid=overviewContinueButton").click();
  await waitTillHTMLRendered(page);
  await expect(page).toHaveScreenshot();
});
