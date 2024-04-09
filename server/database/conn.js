import mongoose from "mongoose";

import "dotenv/config";
export default async function connect() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");
}
