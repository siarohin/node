const fs = require('fs');
const path = require('path');
const util = require('util');
const readfile = util.promisify(fs.readFile);
const writefile = util.promisify(fs.writeFile);

const pathToCities = path.join(__dirname, '../db/cities.json');

const getCities = () => {
  return readfile(pathToCities)
    .then(JSON.parse);
};

const getCitiesById = (id) => {
  return getCities()
  .then(cities => {
    return cities.find(element => element.id === Number(id));
  })
};

const addCities = (cities) => {
  return writefile(pathToCities, JSON.stringify(cities));
};

const addCity = (city) => {
  return getCities()
    .then(cities => {
      const id = cities[cities.length - 1].id + 1;
      const newCity = Object.assign({}, city, { id });
      const newCities = cities.concat(newCity);

      return addCities(newCities);
    });
};

module.exports = {
  getCities,
  getCitiesById,
  addCity
}