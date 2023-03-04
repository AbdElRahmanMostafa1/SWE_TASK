import fs from "fs";
import path from "path";

import { config } from "dotenv";
config();
import express from "express";
import "express-async-handler";
import connectToDB from "./src/config/db.js";
import morgan from "morgan";
import cors from "cors";

// Configs
connectToDB();

// Routes
import imageRoutes from "./src/routes/post.js";
import { __prod__ } from "./src/constants/strings.js";

const app = express();
const PORT = 5000;
const baseURL = process.env.BASE_URL;

if (!__prod__) {
  app.use(
    morgan("short", {
      stream: fs.createWriteStream(path.join(path.resolve(), "morgan.log"), {
        flags: "a",
      }),
    })
  );
}

app.use(cors());
app.use(express.json());
app.use(`${baseURL}/img`, imageRoutes);

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
