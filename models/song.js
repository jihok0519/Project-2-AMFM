const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema ({
    songID: Object,
    coverAlbum: String,
    songName: String,
    dateReleased: Number,
    songArtist: String,
    songRuntime: Number,
    songGenre: String,
    songType: String
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
