import express from "express";

const router = express.Router();

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

router.get("/:id", (req, res, next) => {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const error = new Error(
			`A post with with the id of ${id} does not exist`,
		);
		error.status = 404;
		return next(error);
	}
	return res.status(200).json(posts.filter((posts) => posts.id === id));
});

// Create new post
router.post("/", (req, res) => {
	const newPost = {
		id: posts.length + 1,
		title: req.body.title,
	};

	if (!newPost.title) {
		const error = new Error(`Please include a title`);
		error.status = 400;
		return next(error);
	}

	posts.push(newPost);
	return res.status(201).json(posts);
});

export default router;
