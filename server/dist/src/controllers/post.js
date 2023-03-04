"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = exports.addPost = void 0;
const http_status_codes_1 = require("http-status-codes");
const Post_1 = __importDefault(require("../models/Post"));
const addPost = async (req, res, next) => {
    const newPost = new Post_1.default({
        imageUrl: req.file.location,
        caption: req.body.caption,
    });
    newPost.save();
    res.status(http_status_codes_1.StatusCodes.CREATED).send(newPost);
};
exports.addPost = addPost;
const getAllPosts = async (req, res, next) => {
    const page = req === null || req === void 0 ? void 0 : req.query.page;
    const pageNumber = parseInt(page) || 1;
    const perPage = 10;
    const allPosts = await Post_1.default.find()
        .sort({ createdAt: 1 })
        .skip((pageNumber - 1) * perPage)
        .limit(perPage);
    res.status(http_status_codes_1.StatusCodes.OK).send(allPosts);
};
exports.getAllPosts = getAllPosts;
