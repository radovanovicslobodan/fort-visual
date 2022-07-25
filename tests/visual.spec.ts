// import { faker } from "@faker-js/faker";
// import { expect, test } from "@playwright/test";
// import { formatDate } from "../utils/format-date";
// import { waitTillHTMLRendered } from "../utils/waiters";

// test.skip("mobile emulation", async ({ page }) => {
//   await page.goto("/");
//   await waitTillHTMLRendered(page);
//   await expect(page).toHaveScreenshot();
//   await page.locator("text=Get Started").click();
//   await waitTillHTMLRendered(page);
//   await expect(page).toHaveScreenshot();
//   await page.locator("data-testid=overviewContinueButton").click();
//   await waitTillHTMLRendered(page);
//   await expect(page).toHaveScreenshot();
// });
// test.skip("recorded test", async ({ page }) => {
//   let email = faker.internet.email("peter", "parker");
//   await page.goto("/");
//   // Click [data-testid="btnTestOverviewNavigation"]
//   await page.locator('[data-testid="btnTestOverviewNavigation"]').click();
//   await page.waitForURL("overview");
//   // Click [data-testid="overviewContinueButton"]
//   await page.locator('[data-testid="overviewContinueButton"]').click();
//   await page.waitForURL("residence");
//   // Click [placeholder="Select State of Residence"]
//   await page.locator('[placeholder="Select State of Residence"]').click();
//   // Click text=New Jersey
//   await page.locator("text=New Jersey").click();
//   // Click [data-testid="btnTest"]
//   await page.locator('[data-testid="btnTest"]').click();
//   await page.waitForURL("concerns");
//   // Click button:has-text("Academic or school problems")
//   await page.locator('button:has-text("Academic or school problems")').click();
//   // Click [data-testid="concernsPageButtonContinue"]
//   await page.locator('[data-testid="concernsPageButtonContinue"]').click();
//   await page.waitForURL("steps");
//   // Click button:has-text("AIs getting poor grades")
//   await page.locator('button:has-text("AIs getting poor grades")').click();
//   // Click [data-testid="concernsPageButtonBack"]
//   await page.locator('[data-testid="concernsPageButtonBack"]').click();
//   await page.waitForURL("final-step");
//   // Click button:has-text("GNone of the above")
//   await page.locator('button:has-text("GNone of the above")').click();
//   // Click [data-testid="concernsFinalPageButtonBack"]
//   await page.locator('[data-testid="concernsFinalPageButtonBack"]').click();
//   await page.waitForURL("register");
//   // Click [placeholder="Enter your Email address"]
//   await page.locator('[placeholder="Enter your Email address"]').click();
//   // Fill [placeholder="Enter your Email address"]
//   await page.locator('[placeholder="Enter your Email address"]').fill(email);
//   // Click [placeholder="Enter your Password"]
//   await page.locator('[placeholder="Enter your Password"]').click();
//   // Fill [placeholder="Enter your Password"]
//   await page.locator('[placeholder="Enter your Password"]').fill("Password1!");
//   // Click [placeholder="Confirm your Password"]
//   await page.locator('[placeholder="Confirm your Password"]').click();
//   // Fill [placeholder="Confirm your Password"]
//   await page
//     .locator('[placeholder="Confirm your Password"]')
//     .fill("Password1!");
//   // Click [data-testid="submitButton"]
//   await page.locator('[data-testid="submitButton"]').click();
//   await page.waitForNavigation();
//   // Click [placeholder="Enter your Email Address"]
//   await page.locator('[placeholder="Enter your Email Address"]').click();
//   // Fill [placeholder="Enter your Email Address"]
//   await page.locator('[placeholder="Enter your Email Address"]').fill(email);
//   // Click [placeholder="Enter your Password"]
//   await page.locator('[placeholder="Enter your Password"]').click();
//   // Fill [placeholder="Enter your Password"]
//   await page.locator('[placeholder="Enter your Password"]').fill("Password1!");
//   // Click input:has-text("Login")
//   await page.locator('input:has-text("Login")').click();
//   await page.waitForURL("personal-child-info/personal-info");
//   // Click [placeholder="Enter your First Name"]
//   await page.locator('[placeholder="Enter your First Name"]').click();
//   // Fill [placeholder="Enter your First Name"]
//   await page.locator('[placeholder="Enter your First Name"]').fill("Peter");
//   // Press Tab
//   await page.locator('[placeholder="Enter your First Name"]').press("Tab");
//   // Fill [placeholder="Enter your Last Name"]
//   await page.locator('[placeholder="Enter your Last Name"]').fill("Parker");
//   // Click [placeholder="Select Relationship with Child"]
//   await page.locator('[placeholder="Select Relationship with Child"]').click();
//   // Click text=Father
//   await page.locator("text=Father").click();
//   // Fill [placeholder="Select Relationship with Child"]
//   await page
//     .locator('[placeholder="Select Relationship with Child"]')
//     .fill("Father");
//   // Fill [placeholder="mm\/dd\/yyyy"]
//   await page.locator('[placeholder="mm\\/dd\\/yyyy"]').fill("01/01/1992");
//   // Click [data-testid="nextCaregiverBtn"]
//   await page.locator('[data-testid="nextCaregiverBtn"]').click();
//   await page.waitForURL("personal-child-info/child-info");
//   // Click [placeholder="Enter your Child\'s First Name"]
//   await page
//     .locator('[placeholder="Enter your Child\\\'s First Name"]')
//     .click();
//   // Fill [placeholder="Enter your Child\'s First Name"]
//   await page
//     .locator('[placeholder="Enter your Child\\\'s First Name"]')
//     .fill("Patricia");
//   // Click [placeholder="Enter your Child\'s Last Name"]
//   await page.locator('[placeholder="Enter your Child\\\'s Last Name"]').click();
//   // Fill [placeholder="Enter your Child\'s Last Name"]
//   await page
//     .locator('[placeholder="Enter your Child\\\'s Last Name"]')
//     .fill("Parker");
//   // Click [placeholder="mm\/dd\/yyyy"]
//   await page.locator('[placeholder="mm\\/dd\\/yyyy"]').click();
//   // Fill [placeholder="mm\/dd\/yyyy"]
//   await page.locator('[placeholder="mm\\/dd\\/yyyy"]').fill("01/01/2014");
//   // Click [placeholder="Select Child\'s Sex Assigned at Birth"]
//   await page
//     .locator('[placeholder="Select Child\\\'s Sex Assigned at Birth"]')
//     .click();
//   // Click text=Female
//   await page.locator("text=Female").click();
//   // Click [placeholder="Select Child\'s Preferred Pronoun"]
//   await page
//     .locator('[placeholder="Select Child\\\'s Preferred Pronoun"]')
//     .click();
//   // Click text=She/Her/Her
//   await page.locator("text=She/Her/Her").click();
//   // Click [data-testid="nextChildButton"]
//   await page.locator('[data-testid="nextChildButton"]').click();
//   await page.waitForURL("personal-child-info/browse-therapist");
//   // Click [data-testid="browseTherapistItem-c305afa5-de5a-4c1c-8acd-55bab4068684"] [data-testid="bookButton"]
//   await page
//     .locator(
//       '[data-testid="browseTherapistItem-c305afa5-de5a-4c1c-8acd-55bab4068684"] [data-testid="bookButton"]'
//     )
//     .click();
//   await page.waitForURL(
//     "personal-child-info/browse-therapist/c305afa5-de5a-4c1c-8acd-55bab4068684"
//   );
// });
// test("recording flow", async ({ page }) => {
//   let email = faker.internet.email().toLocaleLowerCase();
//   let password = "Password1!";
//   let caregiverFirstName = faker.name.firstName();
//   let caregiverLastName = faker.name.lastName();
//   let childFirstName = faker.name.firstName();
//   let caregiverBirthdate = formatDate(
//     new Date(
//       faker.date.birthdate({
//         min: 19,
//         max: 90,
//         mode: "age",
//       })
//     )
//   );
//   let childBirthdate = formatDate(
//     new Date(faker.date.birthdate({ min: 5, max: 19, mode: "age" }))
//   );
//   // TEST START
//   await page.goto("/overview");
//   await waitTillHTMLRendered(page);
//   await expect(page).toHaveScreenshot({ fullPage: true }); // Explanation page
//   await page.locator('[data-testid="overviewContinueButton"]').click();
//   await page.waitForNavigation();

//   await expect(page).toHaveScreenshot({ fullPage: true }); // Residence page
//   await page.locator('[placeholder="Select State of Residence"]').click();

//   await expect(page).toHaveScreenshot({ fullPage: true }); // State list
//   await page.locator("text=New Jersey").click();

//   await expect(page).toHaveScreenshot({ fullPage: true }); // Selected state
//   await page.locator('[data-testid="btnTest"]').click();
//   await waitTillHTMLRendered(page);

//   await expect(page).toHaveScreenshot({ fullPage: true }); // L1 concerns page
//   await page.locator('button:has-text("Academic or school problems")').click();

//   await expect(page).toHaveScreenshot({ fullPage: true }); // First L1 concern selected
//   await page.locator('[data-testid="concernsPageButtonContinue"]').click();
//   await waitTillHTMLRendered(page);

//   await expect(page).toHaveScreenshot({ fullPage: true }); // L2 concerns page
//   await page.locator('button:has-text("Is getting poor grades")').click();

//   await expect(page).toHaveScreenshot({ fullPage: true }); // First L2 concern selected
//   await page.locator('[data-testid="concernsPageButtonBack"]').click();
//   await waitTillHTMLRendered(page);

//   await expect(page).toHaveScreenshot({ fullPage: true }); // L3 concerns page
//   await page.locator('button:has-text("None of the above")').click();

//   await expect(page).toHaveScreenshot({ fullPage: true }); // Last L3 concern selected floating header!!!
//   await page.locator('[data-testid="concernsFinalPageButtonBack"]').click();
//   await waitTillHTMLRendered(page);

//   await expect(page).toHaveScreenshot({ fullPage: true }); // Registration page
//   await page.locator('[placeholder="Enter your Email address"]').fill(email);
//   await page.locator('[placeholder="Enter your Password"]').fill(password);
//   await page.locator('[placeholder="Confirm your Password"]').fill(password);
//   await page.locator('[data-testid="submitButton"]').click();
//   await page.waitForNavigation();

//   await expect(page).toHaveScreenshot({ fullPage: true }); // Login page
//   await page.locator('[placeholder="Enter your Email Address"]').fill(email);
//   await page.locator('[placeholder="Enter your Password"]').fill(password);
//   await page.locator('input:has-text("Login")').click();
//   await waitTillHTMLRendered(page);

//   await expect(page).toHaveScreenshot({ fullPage: true }); // Caregiver page
//   await page
//     .locator('[placeholder="Enter your First Name"]')
//     .fill(caregiverFirstName);
//   await page
//     .locator('[placeholder="Enter your Last Name"]')
//     .fill(caregiverLastName);
//   await page.locator('[placeholder="Select Relationship with Child"]').click();
//   await page.locator("text=Father").click();
//   await page
//     .locator('[placeholder="Select Relationship with Child"]')
//     .fill("Father");
//   await page.locator('[placeholder="mm\\/dd\\/yyyy"]').fill(caregiverBirthdate);
//   await page.locator('[data-testid="nextCaregiverBtn"]').click();
//   await page.waitForNavigation();

//   await expect(page).toHaveScreenshot({ fullPage: true }); // Child info page
//   await page
//     .locator('[placeholder="Enter your Child\\\'s First Name"]')
//     .fill(childFirstName);
//   await page
//     .locator('[placeholder="Enter your Child\\\'s Last Name"]')
//     .fill(caregiverLastName);
//   await page.locator('[placeholder="mm\\/dd\\/yyyy"]').fill(childBirthdate);
//   await page
//     .locator('[placeholder="Select Child\\\'s Sex Assigned at Birth"]')
//     .click();
//   await page.locator("text=Female").click();
//   await page
//     .locator('[placeholder="Select Child\\\'s Preferred Pronoun"]')
//     .click();
//   await page.locator("text=She/Her/Her").click();
//   await page.locator('[data-testid="nextChildButton"]').click();
//   await waitTillHTMLRendered(page);

//   await expect(page).toHaveScreenshot({ fullPage: true }); //Therapist list page
//   await page
//     .locator(
//       '[data-testid="browseTherapistItem-c305afa5-de5a-4c1c-8acd-55bab4068684"] [data-testid="bookButton"]'
//     )
//     .click();
//   await page.waitForNavigation();

//   await expect(page).toHaveScreenshot({ fullPage: true }); // Single therapist page
//   // await page.pause();
// });
