const express = require('express');
const Guest = require('../models/guest');

module.exports = (() => {
  'use strict';

  const router = express.Router();

  const countProjection = {
    __v: false,
    _id: false
  };

  router.get('/all', (req, res) => {
    Guest.find((err, guests) => {
      if (err) throw err;
      return res.json({guests});
    });
  });

  router.post('/new', (req, res) => {
    const { guest } = req.body;
    const newScore = guest;
    Guest.findOneAndUpdate({}, { count: newScore }, { projection: countProjection }, (err, score) => {
      if (err) throw err;
      res.json({ count: newScore });
    });
  });

  return router;
})();
