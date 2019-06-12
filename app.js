require('dotenv').config()
const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');

const screen = {
  width: 640,
  height: 480
};

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();

driver.get('http://stream.eurobeat.xyz');