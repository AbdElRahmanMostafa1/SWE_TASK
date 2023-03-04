import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Post from "../models/Post";
import { MulterRequest } from "../interfaces";

const addPost = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
) => {
  const newPost = new Post({
    imageUrl: req.file.location,
    caption: req.body.caption,
  });
  newPost.save();

  res.status(StatusCodes.CREATED).send(newPost);
};

const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  const page = req?.query.page as string;

  const pageNumber = parseInt(page) || 1;

  const perPage = 10;
  const allPosts = await Post.find()
    .sort({ createdAt: 1 })
    .skip((pageNumber - 1) * perPage)
    .limit(perPage);

  res.status(StatusCodes.OK).send(allPosts);
};

export { addPost, getAllPosts };
