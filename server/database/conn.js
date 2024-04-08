import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(
    "mongodb+srv://ducanco6789:x5Rcqxo4XRBEPAN9@quiz.g06pvfg.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database Connected");
}
