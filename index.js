const { fetchMyIP } = require('./iss');
const { fetchCordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('There was an error: ', error);
//     return;
//   }
    
//   console.log("Successfully gathered IP: ", ip);
// });

// fetchCordsByIP("108.173.150.48", (error, data) => {
//   if (error) {
//     console.log(error.message);
//     return;
//   }

//   console.log("Successfully found coordinates: ", data);
// });

// const coords = {
//   "latitude": 51.0486151,
//   "longitude": -114.0708459,
// }
// fetchISSFlyOverTimes(coords, (error, times) => {
//   if (error) {
//     console.log(error.message);
//     return;
//   }

//   console.log("Fly over times: ", times);
// });