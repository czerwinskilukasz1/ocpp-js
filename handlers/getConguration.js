const Promise = require('promise');
const DB = require('../db/index.js');
var Storage = new DB(process.env.storage);

module.exports = {
  handle: function(data){
    // TODO: save new availability status for station
    return new Promise(function(resolve, reject) {
      resolve(
        {
          GetConfigurationResponse: {
            status: 'Accepted'
          }
        });
    });
  },

  cbHandle: function(data, callback){
    // TODO: Dummy Content
    callback({
      GetConfigurationResponse: {
        status: 'Accepted'
      }
    })
  }
}
