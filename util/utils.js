var fs = require('fs');
var path = require('path');

module.exports = {
  // Get the process params
  getParam: function(paramName) {
  	var index = process.argv.indexOf(paramName);
    if (index === -1) {
      // Not found!
      console.log(`${paramName} not found!`);
      return null;
    } else {
      // Found
      var res = process.argv[index+1];
      console.log(`${paramName}=${res}`);
      return res;
    }
  },

  // Read the config file
  getConfig() {
    // Read conf
    return JSON.parse(fs.readFileSync(path.join(__dirname,"../config.json"), "UTF-8"));
  }
}