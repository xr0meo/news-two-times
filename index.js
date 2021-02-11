const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.sueddeutsche.de');
  await page.waitForSelector('button.js_accept')
  await page.click('button.js_accept')
  await page.screenshot({ path: 'test.png' });

  await browser.close();
})();