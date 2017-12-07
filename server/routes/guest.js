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
    Guest.find({disabled: {$ne: true}}, (err, r) => {
      if (err) throw err;
      res.json({guests: r});
    });
  });

  router.post('/autosave', (req, res) => {
    Guest.findOneAndUpdate({_id: req.body.id}, req.body, (err, r) => {
      let updatedData = req.body;
      console.log(`autosave of ${updatedData.id} start`);
      if (err) {
        console.log(`autosave of ${updatedData.id} failed : ${err}`);
        throw err;
      };
      console.log(`autosave of ${updatedData.id} done`);
      res.json({guest: r});
    });
  });

  router.post('/create', (req, res) => {
    const guest = Object.create(req.body);
    let newGuest = new Guest({
      nom: guest.nom,
      prenom: guest.prenom,
      cote: guest.cote,
      adulte: 1,
      enfant: 0,
      lien: '',
      famille: guest.famille,
      vinhonneur: guest.vinhonneur,
      repas: guest.repas
    });
    newGuest.save((err) => {
      console.log('saving new guest');
      if (err) return console.log(`failed to save new guest : ${err}`);
      // saved!
    });
  });

  router.post('/delete', (req, res) => {
    Guest.findOneAndUpdate({_id: req.body.id}, {disabled: true}, (err, r) => {
      let updatedData = req.body;
      console.log(`deleting ${updatedData.id}`);
      if (err) {
        console.log(`failed to delete ${updatedData.id} : ${err}`);
        throw err;
      };
      res.json({guest: r});
    });
  });

  return router;
})();
