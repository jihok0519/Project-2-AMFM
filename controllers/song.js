const express = require('express');
const router = express.Router();
const Song = require('../models/song');

router.get('/', (req, res) => {
    Song.find({}, (err, foundSong) => {
        res.render('songs/index.ejs', {
            song: foundSong
        });
    })
});

router.get('/new', (req, res) => {
    res.render('songs/new.ejs');
});

router.post('/', (req, res) => {
    Song.create(req.body, (err, createdSong) => {
        res.redirect('/songs');
    });
});

router.get('/:id', (req, res) => {
    Song.findById(req.params.id, (err, foundSong) => {
        res.render('songs/show.ejs', {
            song: foundSong
        });
    });
});

router.delete('/:id', (req, res) => {
    Song.findByIdAndRemove(req.params.id, () => {
        res.redirect('/songs');
    });
});

router.get('/:id/edit', (req, res) => {
    Song.findById(req.params.id, (err, foundSong) => {
        res.render('songs/edit.ejs', {
            song: foundSong
        });
    });
});

router.put('/:id', (req, res) => {
    Song.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/songs');
    });
});

module.exports = router;