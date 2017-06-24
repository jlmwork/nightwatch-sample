var chromedriver = require('chromedriver');
module.exports = {
  before : function(done) {
    console.log("START STANDALONE CHROME DRIVER");
    chromedriver.start();
    done();
  },

  after : function(done) {
    console.log("STOP STANDALONE CHROME DRIVER");
    chromedriver.stop();
    done();
  }
};
