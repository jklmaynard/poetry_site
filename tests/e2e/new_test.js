var config = require('../../nightwatch.conf.js');
var SCREENSHOT_PATH = "screenshots";

module.exports = {
  'New Test Attempt': function(browser) {
    browser.url('localhost:3000');
    browser.waitForElementVisible('body');
    browser.assert.title('James Maynard | New');
    browser.saveScreenshot(SCREENSHOT_PATH + '/test_page_screencap.png');
    browser.end();
  }
};
