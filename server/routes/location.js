const express = require('express');
const Location = require('../models/location');

module.exports = (() => {
  'use strict';

  const router = express.Router();

  router.get('/all', (req, res) => {
    Location.find({disabled: {$ne: true}}, (err, r) => {
      if (err) throw err;
      res.json({locations: r});
    });
  });

  router.post('/autosave', (req, res) => {
    Location.findOneAndUpdate({_id: req.body.id}, req.body, (err, r) => {
      let updatedData = req.body;
      console.log(`autosave of ${updatedData.id} start`);
      if (err) {
        console.log(`autosave of ${updatedData.id} failed : ${err}`);
        throw err;
      };
      console.log(`autosave of ${updatedData.id} done`);
      res.json({location: r});
    });
  });

  router.post('/create', (req, res) => {
    const location = Object.create(req.body);
    let newLocation = new Location({
      name: location.name,
      description: location.description,
      address: location.address,
      imageUrl: location.imageUrl
    });
    newLocation.save((err) => {
      console.log('saving new location');
      if (err) return console.log(`failed to save new location : ${err}`);
      // saved!
    });
  });

  router.post('/delete', (req, res) => {
    Location.findOneAndUpdate({_id: req.body.id}, {disabled: true}, (err, r) => {
      let updatedData = req.body;
      console.log(`deleting ${updatedData.id}`);
      if (err) {
        console.log(`failed to delete ${updatedData.id} : ${err}`);
        throw err;
      };
      res.json({location: r});
    });
  });

  return router;
})();
