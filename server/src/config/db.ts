import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(process.env.DB_LOCAL_CONNECTION as string);
    console.log(`Connected to Database successfully`);
  } catch (error) {
    console.log(`DB Error ${error}`);
  }
};

export default connectToDB;
