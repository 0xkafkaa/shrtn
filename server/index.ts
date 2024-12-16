import express from "express";
import dotenv from "dotenv";
import connectDB from "./db-connect";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
