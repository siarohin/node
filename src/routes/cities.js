const express = require('express');
const router = express.Router();

const contollersCities = require('../controllers/cities');
const authenticate = require('../middlewares/authenticate');

router.get('/', (req, res) => {
  contollersCities.getCities()
    .then(cities => res.json(cities))
    .catch((err) => {
      res.status(500).send('Server is not response');
    })
});

router.get('/:id', (req, res) => {
  contollersCities.getCitiesById(req.params.id)
    .then(city => {
      if (!city) {
        res.status(404).send('City was not found');
        return;
      }
      res.json(city);
    })
    .catch((err) => {
      res.status(500).send('Server is not response');
    });
});

router.post('/', authenticate, (req, res) => {
  contollersCities.addCity(req.body)
    .then(() => {
      return res.send('Data has saved');
    })
    .catch(err => {
      res.status(500).send('Server is not response');
    })
});

module.exports = router;