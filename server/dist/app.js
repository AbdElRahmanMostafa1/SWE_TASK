"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
require("express-async-handler");
const db_js_1 = __importDefault(require("./src/config/db.js"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// Configs
(0, db_js_1.default)();
// Routes
const post_js_1 = __importDefault(require("./src/routes/post.js"));
const strings_js_1 = require("./src/constants/strings.js");
const app = (0, express_1.default)();
const PORT = 5000;
const baseURL = process.env.BASE_URL;
if (!strings_js_1.__prod__) {
    app.use((0, morgan_1.default)("short", {
        stream: fs_1.default.createWriteStream(path_1.default.join(path_1.default.resolve(), "morgan.log"), {
            flags: "a",
        }),
    }));
}
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(`${baseURL}/img`, post_js_1.default);
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
