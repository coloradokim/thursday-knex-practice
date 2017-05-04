const express = require('express');
const router = express.Router();
const database = require('../db/knex.js')

router.get('/', (req, res) => {
  database('individuals').select()
  .then(function (listOfIndividuals) {
    res.status(200).json(listOfIndividuals)
  })
  .catch(function (error) {
    console.log('something is wrong.');
  });
});

router.post('/', (req, res) => {
  if (!req || !req.body || !req.body['name']) {
    res.statusCode = 500
    res.end()
    return
  }

  database.insert(req.body).into('individuals').returning('*')
    .then((data) => {
      res.json(data[0])
      res.statusCode = 200
      res.end()
    }, (err) => {
      console.log(err)
      res.statusCode = 500
      res.json(err)
      res.end()
    }).catch((err) => {
      throw new Error(err)
    }).finally(() => {
      res.end()
    })
});

router.delete('/individuals/:id', (req, res) => {
  let payload = { id: req.params.id }
  database('individuals').where(payload).del().then((data) => {
      console.log('data: ', data)
      res.statusCode = 200
      res.end()
    }).finally(() => {
      res.end()
    })
});

router.patch('/individuals/:id', (req, res) => {
  let payload = {id: req.params.id}
  database('individuals').where(payload)
    .update(req.body).then((count) => {
      console.log(`${count} entry was changed`);
    }).finally(() => {
      res.end()
    })
});


module.exports = router;
