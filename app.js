require('dotenv').config()
const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({
  	headless: false,
    executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
  });
	const page = await browser.newPage();

	await page.setViewport({width: 1200, height: 720})
	await page.goto('https://accounts.spotify.com/en/login', { waitUntil: 'networkidle0' }); // wait until page load
	await page.type('#login-username', process.env.SPOTIFY_USER);
	await page.type('#login-password', process.env.SPOTIFY_PASSWORD);
	// click and wait for navigation
	await Promise.all([
		page.click('#login-button'),
		page.waitForNavigation({ waitUntil: 'networkidle0' }),
	]);
	await page.goto('https://open.spotify.com/track/61mWefnWQOLf90gepjOCb3', { waitUntil: 'networkidle0' });
}
main();