const express = require('express');
const router = express.Router();
const database = require('../db/knex.js')

router.get('/', function (req, res) {
  database('individuals').select()
  .then(function (individuals) {
    res.status(200).json(individuals)
  })
  .catch(function (error) {
    console.log('something is wrong.');
  });
});


module.exports = router;
