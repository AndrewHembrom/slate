import mongoose from "mongoose";
import { config } from "./app.config";

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Database Connected Successfully");
    } catch (err) {
        console.log(`Error connecting to DB: ${err}`);
        process.exit(1);
    }
};

export default connectDB;