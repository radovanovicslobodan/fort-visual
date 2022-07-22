import { faker } from "@faker-js/faker";
import { expect, test } from "@playwright/test";

test("fort onboarding flow", async ({ page }) => {
  let email = faker.internet.email("peter", "parker");
  await page.goto("/");
  // Click [data-testid="btnTestOverviewNavigation"]
  await page.locator('[data-testid="btnTestOverviewNavigation"]').click();
  await page.waitForURL("overview");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click [data-testid="overviewContinueButton"]
  await page.locator('[data-testid="overviewContinueButton"]').click();
  await page.waitForURL("residence");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click [placeholder="Select State of Residence"]
  await page.locator('[placeholder="Select State of Residence"]').click();
  // Click text=New Jersey
  await page.locator("text=New Jersey").click();
  // Click [data-testid="btnTest"]
  await page.locator('[data-testid="btnTest"]').click();
  await page.waitForURL("concerns");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click button:has-text("Academic or school problems")
  await page.locator('button:has-text("Academic or school problems")').click();
  // Click [data-testid="concernsPageButtonContinue"]
  await page.locator('[data-testid="concernsPageButtonContinue"]').click();
  await page.waitForURL("steps");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click button:has-text("AIs getting poor grades")
  await page.locator('button:has-text("AIs getting poor grades")').click();
  // Click [data-testid="concernsPageButtonBack"]
  await page.locator('[data-testid="concernsPageButtonBack"]').click();
  await page.waitForURL("final-step");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click button:has-text("GNone of the above")
  await page.locator('button:has-text("GNone of the above")').click();
  // Click [data-testid="concernsFinalPageButtonBack"]
  await page.locator('[data-testid="concernsFinalPageButtonBack"]').click();
  await page.waitForURL("register");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click [placeholder="Enter your Email address"]
  await page.locator('[placeholder="Enter your Email address"]').click();
  // Fill [placeholder="Enter your Email address"]
  await page.locator('[placeholder="Enter your Email address"]').fill(email);
  // Click [placeholder="Enter your Password"]
  await page.locator('[placeholder="Enter your Password"]').click();
  // Fill [placeholder="Enter your Password"]
  await page.locator('[placeholder="Enter your Password"]').fill("Password1!");
  // Click [placeholder="Confirm your Password"]
  await page.locator('[placeholder="Confirm your Password"]').click();
  // Fill [placeholder="Confirm your Password"]
  await page
    .locator('[placeholder="Confirm your Password"]')
    .fill("Password1!");
  // Click [data-testid="submitButton"]
  await page.locator('[data-testid="submitButton"]').click();
  await page.waitForNavigation();
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click [placeholder="Enter your Email Address"]
  await page.locator('[placeholder="Enter your Email Address"]').click();
  // Fill [placeholder="Enter your Email Address"]
  await page.locator('[placeholder="Enter your Email Address"]').fill(email);
  // Click [placeholder="Enter your Password"]
  await page.locator('[placeholder="Enter your Password"]').click();
  // Fill [placeholder="Enter your Password"]
  await page.locator('[placeholder="Enter your Password"]').fill("Password1!");
  // Click input:has-text("Login")
  await page.locator('input:has-text("Login")').click();
  await page.waitForURL("personal-child-info/personal-info");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click [placeholder="Enter your First Name"]
  await page.locator('[placeholder="Enter your First Name"]').click();
  // Fill [placeholder="Enter your First Name"]
  await page.locator('[placeholder="Enter your First Name"]').fill("Peter");
  // Press Tab
  await page.locator('[placeholder="Enter your First Name"]').press("Tab");
  // Fill [placeholder="Enter your Last Name"]
  await page.locator('[placeholder="Enter your Last Name"]').fill("Parker");
  // Click [placeholder="Select Relationship with Child"]
  await page.locator('[placeholder="Select Relationship with Child"]').click();
  // Click text=Father
  await page.locator("text=Father").click();
  // Fill [placeholder="Select Relationship with Child"]
  await page
    .locator('[placeholder="Select Relationship with Child"]')
    .fill("Father");
  // Fill [placeholder="mm\/dd\/yyyy"]
  await page.locator('[placeholder="mm\\/dd\\/yyyy"]').fill("01/01/1993");
  // Click [data-testid="nextCaregiverBtn"]
  await page.locator('[data-testid="nextCaregiverBtn"]').click();
  await page.waitForURL("personal-child-info/child-info");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click [placeholder="Enter your Child\'s First Name"]
  await page
    .locator('[placeholder="Enter your Child\\\'s First Name"]')
    .click();
  // Fill [placeholder="Enter your Child\'s First Name"]
  await page
    .locator('[placeholder="Enter your Child\\\'s First Name"]')
    .fill("Patricia");
  // Click [placeholder="Enter your Child\'s Last Name"]
  await page.locator('[placeholder="Enter your Child\\\'s Last Name"]').click();
  // Fill [placeholder="Enter your Child\'s Last Name"]
  await page
    .locator('[placeholder="Enter your Child\\\'s Last Name"]')
    .fill("Parker");
  // Click [placeholder="mm\/dd\/yyyy"]
  await page.locator('[placeholder="mm\\/dd\\/yyyy"]').click();
  // Fill [placeholder="mm\/dd\/yyyy"]
  await page.locator('[placeholder="mm\\/dd\\/yyyy"]').fill("01/01/2017");
  // Click [placeholder="Select Child\'s Sex Assigned at Birth"]
  await page
    .locator('[placeholder="Select Child\\\'s Sex Assigned at Birth"]')
    .click();
  // Click text=Female
  await page.locator("text=Female").click();
  // Click [placeholder="Select Child\'s Preferred Pronoun"]
  await page
    .locator('[placeholder="Select Child\\\'s Preferred Pronoun"]')
    .click();
  // Click text=She/Her/Her
  await page.locator("text=She/Her/Her").click();
  // Click [data-testid="nextChildButton"]
  await page.locator('[data-testid="nextChildButton"]').click();
  await page.waitForURL("personal-child-info/browse-therapist");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // Click [data-testid="browseTherapistItem-c305afa5-de5a-4c1c-8acd-55bab4068684"] [data-testid="bookButton"]
  await page
    .locator(
      '[data-testid="browseTherapistItem-c305afa5-de5a-4c1c-8acd-55bab4068684"] [data-testid="bookButton"]'
    )
    .click();
  await page.waitForURL(
    "personal-child-info/browse-therapist/c305afa5-de5a-4c1c-8acd-55bab4068684"
  );
  await expect(page).toHaveScreenshot({ fullPage: true });
});
