const {fetchMyIP} = require('./iss');
const {fetchCordsByIP} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('There was an error: ', error);
//     return;
//   }
    
//   console.log("Successfully gathered IP: ", ip);
// });

// fetchCordsByIP("42", (error, data) => {
//   if (error) {
//     console.log(error.message);
//     return;
//   }

//   console.log("Successfully found coordinates: ", data);
// });