// import { faker } from "@faker-js/faker";

const faker = require("@faker-js/faker");

let futureDate = faker.date.future();
let recentDate = faker.date.recent();
let weekday = faker.date.weekday();

console.log(futureDate);
console.log(recentDate);
console.log(weekday);
