const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema ({
    coverAlbum: String,
    songName: String,
    songGenre: String,
    songArtist: String,
    songRuntime: Number
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
