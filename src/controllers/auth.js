const fs = require('fs');
const path = require('path');
const util = require('util');
const readfile = util.promisify(fs.readFile);
const { token } = require('../../src/config');

const pathToAdmins = path.join(__dirname, '../db/admins.json');

const checkCreds = (admin, pass, name) => {
  return admin.name === name && admin.password === pass;
};

const login = (name, pass) => {
  return readfile(pathToAdmins)
    .then(JSON.parse)
    .then(admins => {
      const isAdmins = !!admins.find(admin => checkCreds(admin, pass, name))

      if (!isAdmins) {
        return Promise.reject('Access denied');
      }

      return token;
    });
};

module.exports = {
    login
};