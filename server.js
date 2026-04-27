import logger from "./middleware/logger.js";

const port = process.env.PORT || 8000;

import express from "express";
import posts from "./routes/posts.js";
const app = express();

// bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Routes
app.use("/api/posts", posts);

app.listen(port, (_) => console.log(`server is running on port ${port}`));
