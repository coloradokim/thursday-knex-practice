const express = require('express');
const router = express.Router();
const database = require('../db/knex.js')

router.get('/', function (req, res) {
  res.send('Hey')
})


module.exports = router;
