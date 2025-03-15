const needle = require('needle');

const fetchMyIP = (callback) => {
  needle.get('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = body.ip;
    callback(null, ip);
  });
};

const fetchCordsByIP = (ip, callback) => {
  needle.get(`http://ipwho.is/${ip}`, (error, response, body) => {

    if (error) return callback(error, null);

    if (!body.success) {
      const msg = `It did not work! Error: Success status was ${body.success}. Server message says: ${body.message} when fetching for IP ${body.ip}`;
      callback(Error(msg), null);
      return;
    }

    const data = {
      latitude: body.latitude,
      longitude: body.longitude,
    };
    callback(null, data);
  });
};

const fetchISSFlyOverTimes = (coords, callback) => {
  needle.get(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    //something

    if (error) return callback(error, null);

    if(response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching times. Response: ${body}`;
      callback(Error(msg), null);
    }

    callback(null, body.response);
  })
}

module.exports = {
  fetchMyIP,
  fetchCordsByIP,
  fetchISSFlyOverTimes,
};
