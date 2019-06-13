require('dotenv').config()
const chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');

const screen = {
  width: 1,
  height: 1
};

var options = new chrome.Options();
options.addArguments('start-minimized');
options.addArguments('disable-popup-blocking');

let driver = new Builder()
    .forBrowser('chrome')
    //.setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .setChromeOptions(new chrome.Options(options).windowSize(screen).setPosition(0, 0))
    .build();

driver.get('https://accounts.spotify.com/en/login');
driver.wait(function() {
  return driver.executeScript('return document.readyState').then(function(readyState) {
    return readyState === 'complete';
  });
});
driver.findElement(By.id("login-username")).sendKeys(process.env.SPOTIFY_USER);
driver.findElement(By.id("login-password")).sendKeys(process.env.SPOTIFY_PASSWORD);
driver.findElement(By.id("login-button")).click();
driver.wait(function() {
  return driver.executeScript('return document.readyState').then(function(readyState) {
    return readyState === 'complete';
  });
});
driver.get('https://open.spotify.com/track/61mWefnWQOLf90gepjOCb3?si=3aDRIzdcTiiGrO7TgMt1Ww');