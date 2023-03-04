import { Router } from "express";
import { addPost, getAllPosts } from "../controllers/post.js";
import uploadToS3 from "../helpers/aws/s3.js";

const router = Router();

const uniqueImageKey = `${Date.now()}${Math.random()}`;
const bucketName = process.env.AWS_Bucket_NAME as string;

router
  .route("/upload")
  .post(uploadToS3(bucketName, "image", uniqueImageKey), addPost);

router.route("/list?:page").get(getAllPosts);

export default router;
