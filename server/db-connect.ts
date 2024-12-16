import mongoose from "mongoose";

const connectDB = async function (): Promise<void> {
  const connection = await mongoose.connect(process.env.MONGOURI || "");
  console.log(`Connection established: ${connection.connection.host}`);
};

export default connectDB;
