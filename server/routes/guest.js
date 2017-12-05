const express = require('express');
const Guest = require('../models/guest');

module.exports = (() => {
  'use strict';

  const router = express.Router();

  // const countProjection = {
  //   __v: false,
  //   _id: false
  // };

  router.get('/all', (req, res) => {
    Guest.find((err, r) => {
      if (err) throw err;
      res.json({guests: r});
    });
  });

  router.post('/autosave', (req, res) => {
    Guest.findOneAndUpdate((err, r) => {
      if (err) throw err;
      res.json({guests: r});
    });
  });

  router.post('/create', (req, res) => {
    const guest = Object.create(req.body);
    console.log(guest);
    let newGuest = new Guest(guest);
    console.log(newGuest);
    console.log(newGuest.nom);
    console.log(newGuest.prenom);
    newGuest.save((err) => {
      console.log('saving new guest');
      if (err) return console.log(`Failed to save new guest : ${err}`);
      // saved!
    });
  });

  return router;
})();
