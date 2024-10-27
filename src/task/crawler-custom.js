import puppeteer from 'puppeteer';

export async function crawl() {

  console.log("MARS: crawl() function as puppetter")

  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Set user agent (optional)
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
    );

    // TODO: pass the URL parameters wit my username / ID / credentials

    const url = 'https://marsrobertson.com/hack';
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }); // 60 seconds timeout

    console.log("SUCCESS, opened the site");

  } catch (error) {
    console.error('Error:', error);
  }

}