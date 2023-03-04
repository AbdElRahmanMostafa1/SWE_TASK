"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_js_1 = require("../controllers/post.js");
const s3_js_1 = __importDefault(require("../helpers/aws/s3.js"));
const router = (0, express_1.Router)();
const uniqueImageKey = `${Date.now()}${Math.random()}`;
const bucketName = process.env.AWS_Bucket_NAME;
router
    .route("/upload")
    .post((0, s3_js_1.default)(bucketName, "image", uniqueImageKey), post_js_1.addPost);
router.route("/list?:page").get(post_js_1.getAllPosts);
exports.default = router;
