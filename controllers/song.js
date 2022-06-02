const express = require("express");
const router = express.Router();
const Song = require("../models/song");

// Index
router.get("/", (req, res) => {
	Song.find({}, (err, foundSong) => {
		res.render("song/index.ejs", {
			song: foundSong,
		});
	});
});

// New
router.get("/new", (req, res) => {
	res.render("song/new.ejs");
});

router.post("/", (req, res) => {
	Song.create(req.body, (err, createdSong) => {
		res.redirect("/song");
	});
});

// Delete
router.delete("/:id", (req, res) => {
	Song.findByIdAndRemove(req.params.id, () => {
		res.redirect("/song");
	});
});

// Update
router.put("/:id", (req, res) => {
	Song.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect("/song");
	});
});

// Edit
router.get("/:id/edit", (req, res) => {
	Song.findById(req.params.id, (err, foundSong) => {
		res.render("song/edit.ejs", {
			song: foundSong,
		});
	});
});

// Show
router.get("/:id", (req, res) => {
	Song.findById(req.params.id, (err, foundSong) => {
		res.render("song/show.ejs", {
			song: foundSong,
		});
	});
});

module.exports = router;
