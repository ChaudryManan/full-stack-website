import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./Routes/user.Routes.js";
const app = express()
app.use(cors({
    origin: (origin, callback) => {
      callback(null, true); // Accept any origin
    },
    credentials: true
  }));
  
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({limit:"16kb",extended:true}))
app.use(express.static('public'))
app.use(cookieParser());
app.use("/api/v1/users",userRouter)
export default app;