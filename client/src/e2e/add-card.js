const puppeteer = require('puppeteer');
const path = require('path');

const pathToScreenShots = './src/e2e/screenshots/';
const createShotPath = name => path.join(pathToScreenShots, `${name}.png`);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://www.localhost:3000/');

  await page.type('input', 'test course');
  await page.click('button');

  await page.screenshot({ path: createShotPath('open-course') });

  await page.type('input', 'test course 2');
  await page.click('button');

  await page.screenshot({ path: createShotPath('open-course-2-elems') });

  await browser.close();
})();

