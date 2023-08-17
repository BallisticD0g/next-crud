import mongoose from "mongoose";

const connectMongoDB = async () => {

    try {
        await mongoose.connect(process.env.MOGODB_URI);
        console.log("Connected to MongoDB 😄");
    } catch (err) {
        console.log(err + "😭");
    }
}

export default connectMongoDB;