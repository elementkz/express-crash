import express from "express";
import path from "path";

import { __dirname } from "./lib.js";

const app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.listen(8000, (_) => console.log(`server is running on port ${8000}`));
