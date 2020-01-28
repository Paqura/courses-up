const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1440,
    height: 1080,
    deviceScaleFactor: 1,
  });

  await page.goto('http://www.localhost:3000/');

  await page.screenshot({path: 'screenshot.png'})

  await browser.close();
})();