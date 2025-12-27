import mongoose from "mongoose";
import { dbName } from "../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        console.log(`\n Mongo DB connected !! DB HOST:${connectionInstace.connection.host}`)
    } catch (error) {
        console.log("Mongo DB connection error",error);
        process.exit(1);
    }
}
export default connectDB;

