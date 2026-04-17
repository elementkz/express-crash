const port = process.env.PORT || 8000;

import express from "express";
import path from "path";

import { __dirname } from "./lib.js";

const app = express();
// Setup static folder
// app.use(express.static(path.join(__dirname, "public")));

let posts = [
	{ id: 1, title: "Post #1" },
	{ id: 2, title: "Something" },
	{ id: 3, title: "Test" },
];
// Get all posts
app.get("/api/posts", (req, res) => {
	const limit = parseInt(req.query.limit);

	if (!isNaN(limit) && limit > 0) {
		res.status(200).json(posts.slice(0, limit));
	} else res.status(200).json(posts);
});

app.get("/api/posts/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post)
		res.status(404).json({
			msg: `A post with with the id of ${id} does not exist`,
		});
	else res.status(200).json(posts.filter((posts) => posts.id === id));
});

app.listen(port, (_) => console.log(`server is running on port ${port}`));
