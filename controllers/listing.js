const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

// GET /listings — index
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find();
    console.log(listings); // should log [] at first
    res.render('listings/index.ejs');
  } catch (err) {
    console.log(err);
    res.send('Error loading listings');
  }
});

module.exports = router;
