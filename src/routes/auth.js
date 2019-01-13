const express = require('express');
const router = express.Router();
const contollersAuth = require('../controllers/auth');

router.post('/', (req, res) => {
  contollersAuth.login(req.body.name, req.body.password)
    .then(token => res.send(token))
    .catch(err => {
      res.status(403)
        .send('Access denied');
    });
});


module.exports = router;