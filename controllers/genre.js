const express = require("express");
const router = express.Router();
const Genre = require("../models/genre");

// Index
router.get("/", (req, res) => {
	Genre.find({}, (err, foundGenre) => {
		res.render("genre/index.ejs", {
			genre: foundGenre,
		});
	});
});

router.post("/", (req, res) => {
	Genre.create(req.body, (err, createdGenre) => {
		res.redirect("/genre");
	});
});

// Show
router.get("/:id", (req, res) => {
	Genre.findById(req.params.id, (err, foundGenre) => {
		res.render("genre/show.ejs", {
			genre: foundGenre,
		});
	});
});

module.exports = router;
