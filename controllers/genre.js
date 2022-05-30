const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');

router.get('/', (req, res) => {
    Genre.find({}, (err, foundGenre) => {
        res.render('genre/index.ejs', {
            genres: foundGenre
        });
    })
});

router.get('/new', (req, res) => {
    res.render('genres/new.ejs');
});

router.post('/', (req, res) => {
    Genre.create(req.body, (err, createdGenre) => {
        res.redirect('/genres');
    });
});

router.get('/:id', (req, res) => {
    Genre.findById(req.params.id, (err, foundGenre) => {
        res.render('genres/show.ejs', {
            genre: foundGenre
        });
    });
});

router.get('/:id/edit', (req, res) => {
    Genre.findById(req.params.id, (err, foundGenre) => {
        res.render('genres/edit.ejs', {
            genre: foundGenre
        });
    });
});

router.put('/:id', (req, res) => {
    Genre.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/genres');
    });
});


module.exports = router;