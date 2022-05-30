const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema ({
    songType: String,
    genreName: String
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
