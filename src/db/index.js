import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGODB_URL;
    if (!MONGO_URI) throw new Error("MONGO_URI is not defined in .env file");
    const connectionInstance = await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
    });
    console.log(
      `\n MongoDB connected!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR", error);
    process.exit(1);
  }
};

export default connectDB;
