const { KoiiStorageClient } = require('@_koii/storage-task-sdk');
const PCR = require('puppeteer-chromium-resolver');

class SimpleCrawlerTask {
  constructor(searchTerm) {
    this.searchTerm = searchTerm;
  }

  async retrieveAndValidateFile(cid, filename = 'dealsData.json') {
    const client = new KoiiStorageClient();

    try {
      const upload = await client.getFile(cid, filename);
      return !!upload;
    } catch (error) {
      console.error('Failed to download or validate file from IPFS:', error);
      throw error;
    }
  }

  async crawl() {
    this.isRunning = true;
    const options = {};
    const stats = await PCR(options);

    if (!stats) {
      throw new Error('Failed to resolve Puppeteer Chromium');
    }

    console.log(`Chrome Path: ${stats.executablePath}`);

    const browser = await stats.puppeteer.launch({
      headless: false, // Set to true for production
      executablePath: stats.executablePath,
    });

    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
    );

    const url = `https://forums.redflagdeals.com/hot-deals-f9/`;
    console.log(`Navigating to URL: ${url}`);

    try {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      console.log(`Page loaded: ${url}`);

      await page.waitForSelector("#search_keywords", { timeout: 5000 });
      console.log(`Search bar loaded`);

      await page.type("#search_keywords", this.searchTerm);
      await page.keyboard.press("Enter");
      console.log(`Search term entered: ${this.searchTerm}`);

      await page.waitForSelector("h2.post_subject", { timeout: 10000 });
      console.log(`Search results loaded`);

      let titles = null;
      try {
        titles = await page.$$eval("h2.post_subject a", (links) =>
          links.map((link) => link.textContent.trim())
        );
        console.log(`Titles retrieved: ${titles}`);
      } catch (error) {
        console.log("Error retrieving titles:", error);
      }

      await browser.close();
      return titles;
    } catch (error) {
      console.error(`Error during navigation or scraping:`, error);
      await browser.close();
      throw error;
    }
  }
}

module.exports = SimpleCrawlerTask;

let task = new SimpleCrawlerTask("mars");
task.crawl().then(titles => {
  console.log('Crawled Titles:', titles);
}).catch(error => {
  console.error('Error during crawling:', error);
});
