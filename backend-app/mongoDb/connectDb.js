import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return true;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB:", conn.connection.host);
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    console.error("Error stack:", error.stack);
    return false;
  }
};

export default connectDB;
