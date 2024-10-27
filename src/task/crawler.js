import PCR from "puppeteer-chromium-resolver";

export async function crawl(searchTerm) {
  const options = {};
  const stats = await PCR(options);
  console.log(`Chrome Path: ${stats.executablePath}`);

  // Set up puppeteer
  // set headless = false for visualization debugging, set headless = true for production
  const browser = await stats.puppeteer.launch({
    headless: false,
    executablePath: stats.executablePath,
  });

  // Open a new page
  const page = await browser.newPage();
  // Set the user agent to a common browser user agent
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
  );
  // The URL to scrape
  const url = `https://marsrobertson.com/hack`;

  console.log("Mars here, crawling: " + url);

  await page.goto(url, { waitUntil: "domcontentloaded" });

  // // close puppeteer
  // await browser.close();
  // return titles;
}