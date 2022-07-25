// import { test } from "@playwright/test";
// import { faker } from "@faker-js/faker";
// import { waitTillHTMLRendered } from "../utils/waiters";
// import { formatDate } from "../utils/format-date";

// test.skip("mobile emulation", async ({ page }, workerInfo) => {
//   await page.goto("/");
//   await waitTillHTMLRendered(page);
//   await page.screenshot({
//     path: `./screenshots/${workerInfo.project.name}-homepage.png`,
//     fullPage: true,
//   });
//   await page.locator("text=Get Started").click();
//   await waitTillHTMLRendered(page);
//   await page.screenshot({
//     path: `./screenshots/${workerInfo.project.name}-explanationpage.png`,
//     fullPage: true,
//   });
//   await page.locator("data-testid=overviewContinueButton").click();
//   await waitTillHTMLRendered(page);
//   await page.screenshot({
//     path: `./screenshots/${workerInfo.project.name}-residencepage.png`,
//     fullPage: true,
//   });
// });

// test("fake data generation", async () => {
//   let firstName = faker.name.firstName();
//   let lastName = faker.name.lastName();

//   let jobTitle = faker.name.jobTitle();
//   let prefix = faker.name.prefix();
//   let suffix = faker.name.suffix();
//   let jobArea = faker.name.jobArea();

//   let phone = faker.phone.number();

//   let birthdate = faker.date.between("2020-01-01", "2030-01-01");

//   console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
//   console.log(`Job title: ${jobTitle}`);
//   console.log(`Job area: ${jobArea}`);
//   console.log(`Phone: ${phone}`);
//   console.log(`Birthdate: ${birthdate}`);

//   console.log(
//     formatDate(new Date(faker.date.between("2020-01-01", "2030-01-01")))
//   );

//   let email = faker.internet.email();

//   console.log(email);
//   console.log(email.toLocaleLowerCase());
// });
