const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');

router.get('/', (req, res) => {
    Genre.find({}, (err, foundGenre) => {
        res.render('genre/index.ejs', {
            genre: foundGenre
        });
    })
});


module.exports = router;