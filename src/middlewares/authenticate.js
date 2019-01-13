const { token } = require('../../src/config');

const authenticate = (req, res, next) => {
  if  (req.query.token === token) {
    next();
  } else {
    res.status(403)
      .send('Access denied');
  }
};

module.exports = authenticate;