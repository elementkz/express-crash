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

app.get("/api/posts", (req, res) => {
	res.json(posts);
});
app.listen(port, (_) => console.log(`server is running on port ${port}`));
