import express from "express";

const router = express.Router();

import {
	createPost,
	deletePost,
	getPost,
	getPosts,
	updatePost,
} from "../controllers/postController.js";

router.get("/", getPosts); // Get all posts
router.get("/:id", getPost); // Get specific post
router.post("/", createPost); // Create post
router.put("/:id", updatePost); // Update post
router.delete("/:id", deletePost); // Delete post

export default router;
