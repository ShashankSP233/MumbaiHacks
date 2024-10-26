import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: DB_NAME,
        });
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR", error);
        process.exit(1);
    }
};

export default connectDB;