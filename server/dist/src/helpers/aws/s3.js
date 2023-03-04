"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const client_s3_1 = require("@aws-sdk/client-s3");
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
dotenv_1.default.config();
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const s3 = new client_s3_1.S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
});
const uploadToS3 = (bucketName, path, key) => {
    const storage = (0, multer_s3_1.default)({
        s3: s3,
        bucket: bucketName,
        key: (req, file, cb) => {
            cb(null, key);
        },
    });
    const upload = (0, multer_1.default)({
        storage: storage,
        fileFilter: (req, file, cb) => {
            const allowedMimeTypes = [
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/gif",
            ];
            if (allowedMimeTypes.includes(file.mimetype)) {
                cb(null, true);
            }
            else {
                cb(new Error("Invalid file type. Only JPEG, PNG, and GIF allowed."));
            }
        },
    });
    return upload.single(path);
};
exports.default = uploadToS3;
