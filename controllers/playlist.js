const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');

router.get('/', (req, res) => {
    Playlist.find({}, (err, foundPlaylist) => {
        res.render('playlist/index.ejs', {
            playlist: foundPlaylist
        });
    })
});

router.get('/new', (req, res) => {
    res.render('playlist/new.ejs');
});

router.post('/', (req, res) => {
    Playlist.create(req.body, (err, createdPlaylist) => {
        res.redirect('/playlist');
    });
});

router.get('/:id', (req, res) => {
    Playlist.findById(req.params.id, (err, foundPlaylist) => {
        res.render('playlist/show.ejs', {
            playlist: foundPlaylist
        });
    });
});

router.delete('/:id', (req, res) => {
    Playlist.findByIdAndRemove(req.params.id, () => {
        res.redirect('/playlist');
    });
});

router.get('/:id/edit', (req, res) => {
    Playlist.findById(req.params.id, (err, foundPlaylist) => {
        res.render('playlist/edit.ejs', {
            playlist: foundPlaylist
        });
    });
});

router.put('/:id', (req, res) => {
    Playlist.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/playlist');
    });
});

module.exports = router;