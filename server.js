import express from "express";
import path from "path";

import { __dirname } from "./lib.js";

const app = express();
// Setup static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, (_) => console.log(`server is running on port ${8000}`));
