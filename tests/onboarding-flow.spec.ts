import { faker } from "@faker-js/faker";
import test, { expect, Page } from "@playwright/test";
import { BrowseTherapistPage } from "../pages/browse-therapist-page";
import { ChildInfoPage } from "../pages/child-info-page";
import { ConcernsPage } from "../pages/concerns-page";
import { ContactWidget } from "../pages/contact-widget";
import { ExplanationPage } from "../pages/explanation-page";
import { LoginPage } from "../pages/login-page";
import { PersonalInfoPage } from "../pages/personal-info-page";
import { RegisterPage as RegistrationPage } from "../pages/registration-page";
import { ResidencePage } from "../pages/residence-page";
import { formatDate } from "../utils/format-date";
import { waitTillHTMLRendered } from "../utils/waiters";

let page;
let email;
let password;
let childEmail;
let caregiverFirstName;
let caregiverLastName;
let childFirstName;
let caregiverBirthdate;
let childBirthdate;
let contactWidget;
let explanationPage;
let residencePage;
let concernsPage;
let registrationPage;
let loginPage;
let personalInfoPage;
let childInfoPage;
let browseTherapistPage;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  email = faker.internet.email().toLowerCase();
  password = "Password1!";
  childEmail = faker.internet.email().toLowerCase();
  caregiverFirstName = faker.name.firstName();
  caregiverLastName = faker.name.lastName();
  childFirstName = faker.name.firstName();
  caregiverBirthdate = formatDate(
    new Date(
      faker.date.birthdate({
        min: 19,
        max: 90,
        mode: "age",
      })
    )
  );
  childBirthdate = formatDate(
    new Date(faker.date.birthdate({ min: 5, max: 19, mode: "age" }))
  );
  explanationPage = new ExplanationPage(page);
  residencePage = new ResidencePage(page);
  concernsPage = new ConcernsPage(page);
  registrationPage = new RegistrationPage(page);
  contactWidget = new ContactWidget(page);
  loginPage = new LoginPage(page);
  personalInfoPage = new PersonalInfoPage(page);
  childInfoPage = new ChildInfoPage(page);
  browseTherapistPage = new BrowseTherapistPage(page);
});
test("Onboarding", async () => {
  await page.goto("/overview");
  await waitTillHTMLRendered(page);
  await expect(page).toHaveScreenshot({ fullPage: true }); // 1. Explanation page

  await contactWidget.clickContactWidget();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 2. Contact widget expanded
  await contactWidget.clickContactWidget();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 3. Contact widget collapsed

  await explanationPage.goToResidencePage();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 4. Residence page

  await residencePage.selectState("New Jersey");
  await waitTillHTMLRendered(page);
  await expect(page).toHaveScreenshot({ fullPage: true }); // 5. Selected state

  await residencePage.goToConcernsPage();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 6. L1 concerns page

  await concernsPage.selectFirstConcern();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 7. Selected first L1 concern

  await concernsPage.continue();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 8. L2 concerns page

  await concernsPage.selectFirstConcern();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 9. Selected first L2 concern

  await concernsPage.continue();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 10. L3 concerns page

  await concernsPage.selectLastConcern();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 11.  Selected first L3 concern

  await concernsPage.next();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 12. Registration page

  await registrationPage.enterInvalidCredentials();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 13. Registration page errors

  await registrationPage.enterValidCredentials(email, password);

  await registrationPage.clickSubmit();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 14. Login page

  await loginPage.login(email, password);
  await expect(page).toHaveScreenshot({ fullPage: true }); // 15. Personal info page

  await personalInfoPage.enterCaregiverInfo("", "", "00/00/0000");
  await expect(page).toHaveScreenshot({ fullPage: true }); // 16. Personal info page errors

  await personalInfoPage.enterCaregiverInfo(
    caregiverFirstName,
    caregiverLastName,
    caregiverBirthdate
  );
  await personalInfoPage.clickSubmit();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 17. Child info page

  await childInfoPage.enterChildInfo(
    childFirstName,
    caregiverLastName,
    "00/00/0000",
    "wrong.email"
  );
  await expect(page).toHaveScreenshot({ fullPage: true }); // 18. Child info page errors

  await childInfoPage.enterChildInfo(
    childFirstName,
    caregiverLastName,
    childBirthdate,
    childEmail
  );
  await childInfoPage.clickSubmit();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 19. Browse therapist page

  await browseTherapistPage.goToFirstTherapist();
  await expect(page).toHaveScreenshot({ fullPage: true }); // 20. Single therapist page
});
