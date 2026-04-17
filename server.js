const port = process.env.PORT || 8000;

import express from "express";

import posts from "./routes/posts.js";

const app = express();
// Setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

app.listen(port, (_) => console.log(`server is running on port ${port}`));
