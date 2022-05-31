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

router.post('/', (req, res) => {
    Genre.create(req.body, (err, createdGenre) => {
        res.redirect('/genre');
    });
});

router.get('/:id', (req, res) => {
    Genre.findById(req.params.id, (err, foundGenre) => {
        res.render('genre/show.ejs', {
            genre: foundGenre
        });
    });
});

router.put('/:id', (req, res) => {
    Genre.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/genre');
    });
});


module.exports = router;