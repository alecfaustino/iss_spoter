const needle = require('needle');

const fetchMyIP = () => {  
  return needle('get', 'https://api.ipify.org?format=json')
  .then((response) => {
    const body = response.body;
    const ip = body.ip;
    return ip;
  });
};

const fetchCordsByIP = (ip) => {
  return needle('get', `http://ipwho.is/${ip}`)
  .then((response) => {
    const body = response.body;
    const data = {
      latitude: body.latitude,
      longitude: body.longitude,
    };
    return data;
  });
};

const fetchISSFlyOverTimes = (coords) => {
  return needle('get', `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`)
  .then((response) => {
    const body = response.body;
    const passTimesArr = body.response;
    return passTimesArr;
  });
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then((ip) => fetchCordsByIP(ip))
  .then((data) => fetchISSFlyOverTimes(data))
  .then((passTimesArr) => passTimesArr);
};

module.exports = {
  nextISSTimesForMyLocation,
};
