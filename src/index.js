// require("dotenv").config();  this will also work but break the consistency of using import so using import below and also dont forget to make changes in package.json->dev (as dotenv supports import in experimental version)
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });

// import express from "express";
// const app = express()
//   // the code is written inside IIFE
//   (async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.on("error", (error) => {
//         console.log("ERR: ", error);
//         throw error;
//       });

//       app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//       });
//     } catch (error) {
//       console.error("ERROR: ", error);
//       throw err;
//     }
//   }
// )();
