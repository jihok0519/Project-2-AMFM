const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
	songID: Object,
	coverAlbum: String,
	songName: String,
	songArtist: String,
	genreName: String,
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
