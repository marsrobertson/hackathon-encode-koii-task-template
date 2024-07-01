const puppeteer = require('puppeteer');

(async () => {
  try {
    // Launch a new browser instance
    const browser = await puppeteer.launch({ headless: false }); // Set headless: false for debugging

    // Open a new page
    const page = await browser.newPage();

    // Set user agent (optional)
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
    );

    // Navigate to the desired URL
    const url = 'https://www.theguardian.com/uk'; // Replace with your target URL
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }); // 60 seconds timeout

    // Scroll down until the container with id "most-viewed-in-uk-news" is visible
    const containerId = '#most-viewed-in-uk-news';
    await page.evaluate(async (containerId) => {
      while (!document.querySelector(containerId)) {
        window.scrollBy(0, window.innerHeight);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      document.querySelector(containerId).scrollIntoView();
    }, containerId);

    // Wait for the container to be fully loaded
    await page.waitForSelector(containerId, { timeout: 60000 }); // 60 seconds timeout

    // Find the <ol> elements and list the items within them
    const lists = await page.evaluate((containerId) => {
      const container = document.querySelector(containerId);
      if (!container) return null;

      const olElements = container.querySelectorAll('ol');
      if (olElements.length < 2) return 'Less than two <ol> elements found';

      return Array.from(olElements).slice(0, 2).map(ol => 
        Array.from(ol.querySelectorAll('li')).map(li => li.textContent.trim())
      );
    }, containerId);

    // Log the lists to the console
    console.log('Lists within <ol> elements:', lists);

    // Close the browser
    // await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
