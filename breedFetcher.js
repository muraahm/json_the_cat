const request = require('request');

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const fetchBreedDescription = function (breedName, callback) {
  request(url, (error, resp, body) => {

    if (error) {
      return callback(error, null);
    } else {
      const data = JSON.parse(body);
      let breed = data[0];
      if (breed) {
        callback(null, data[0].description);
      } else {
        callback(null, `Breed " + ${breedName} + " not found`);
      }
    }

  });
};

module.exports = { fetchBreedDescription };