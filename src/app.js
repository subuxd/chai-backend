import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// it allows resource sharing from another website
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// accepting the data in express server by setting a limit of 16kb for incoming json
app.use(express.json({ limit: "16kb" }));

// for parsing/handling the url data from the user
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// it's for static assets accessing
app.use(express.static("public"));

// used to enable parsing of cookies from incoming HTTP requests
app.use(cookieParser());

// router import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter); // the link will look like this http://localhost:8000/api/v1/users/register

export { app };
