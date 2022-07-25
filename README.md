# Visual testing for Fort application

Automated testing framework for visual testing using [Playwright](https://playwright.dev/).

## Setup

- Install Node.js https://nodejs.org/en/
- Clone this repository https://example.com
- Inside folder with cloned code run `npm install`
- On the first run, execute command ` npm run update` (this will create a folder with reference screenshots, e.g. `onboarding-flow.spec.ts-snapshots` inside tests folder)
- Later, if you want to test against these reference screenshots, run ` npm run test`

## Notes

- Base URL can be set in `.env` file
- Devices that will be used for testing can be set in `playwright.config.ts` in `projects` section (there are multiple devices already defined, but some of them are commented out)

## WARNING

Every test run will register with a randomly created user, so be careful
