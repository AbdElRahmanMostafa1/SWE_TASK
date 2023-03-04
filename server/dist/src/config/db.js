"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDB = async () => {
    mongoose_1.default.set("strictQuery", false);
    try {
        await mongoose_1.default.connect(process.env.DB_LOCAL_CONNECTION);
        console.log(`Connected to Database successfully`);
    }
    catch (error) {
        console.log(`DB Error ${error}`);
    }
};
exports.default = connectToDB;
