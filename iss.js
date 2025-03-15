const needle = require('needle');

const fetchMyIP = (callback) => {
  needle.get('https://api.ipify.org?format=json', (error, response) => {
    const strJSON = JSON.stringify(response.body);
    if (error) {
      callback(error, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.StatusCode} when fetching IP. Response: ${response.body}`;
      callback(Error(msg), null);
      return;
    }
    callback(null, strJSON);
  });
};

module.exports = {
  fetchMyIP,
};