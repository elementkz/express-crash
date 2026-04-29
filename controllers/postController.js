let posts = [
	{ id: 1, title: "Post #1" },
	{ id: 2, title: "Something" },
	{ id: 3, title: "Test" },
];

// @desc Get all posts
// @route GET /api/posts
function getPosts(req, res, next) {
	const limit = parseInt(req.query.limit);

	if (!isNaN(limit) && limit > 0) {
		return res.status(200).json(posts.slice(0, limit));
	}

	return res.status(200).json(posts);
}

// @desc    Get single post
// @route   GET /api/posts/:id
function getPost(req, res, next) {
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
}

// @desc    Create a new post
// @route   POST /api/posts/
function createPost(req, res, next) {
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
}

// @desc    Update Post
// @route   PUT /api/posts/:id
function updatePost(req, res, next) {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);

	if (!post) {
		const error = new Error(`cant find post with id: ${id}`);
		error.status = 404;
		return next(error);
	}

	post.title = req.body.title;
	return res.status(200).json(posts);
}
// @desc    Delete Post
// @route   DELETE /api/posts/:id
function deletePost(req, res, next) {
	const id = parseInt(req.params.id);
	const post = posts.find((post) => post.id === id);
	if (!post) {
		const error = new Error(`cant find post with id: ${id}`);
		error.status = 404;
		return next(error);
	}

	post = posts.filter((post) => post.id != id);
	res.status(200).json(posts);
}

export { getPost, getPosts, createPost, updatePost, deletePost };
