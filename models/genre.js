const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
	genreName: String,
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
