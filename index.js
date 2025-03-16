const { nextISSTimesForMyLocation } = require('./iss');

const printTimes = (times) => {
  for (const time of times) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }

};

nextISSTimesForMyLocation((error, times) => {
  if (error) return console.log("It didn't work!", error);

  printTimes(times);
});

module.exports = {
  printTimes,
}