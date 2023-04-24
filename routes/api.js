const express = require('express');
const router = express.Router();
const Music = require('../models/music');

router.get('/musics', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Music.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/musics', (req, res, next) => {
  if (req.body.action) {
    Music.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/musics/:id', (req, res, next) => {
  Music.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
