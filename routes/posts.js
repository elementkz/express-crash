import express from "express";

const router = express.Router();
import path from "path";

import { __dirname } from "../lib.js";

let posts = [
	{ id: 1, title: "Post #1" },
	{ id: 2, title: "Something" },
	{ id: 3, title: "Test" },
];
// Get all posts
router.get("/", (req, res) => {
	const limit = parseInt(req.query.limit);

	if (!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	}

	return res.status(200).json(posts);
});

router.get("/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post)
		return res.status(404).json({
			msg: `A post with with the id of ${id} does not exist`,
		});
	return res.status(200).json(posts.filter((posts) => posts.id === id));
});

export default router;
