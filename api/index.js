import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
 import userRoutes from "./routes/user.route.js";
dotenv.config();
 mongoose.connect(process.env.MONGODB)
 .then(()=>{
     console.log("connected succesfully")
 })
.catch((err)=>{
     console.log(err)
})
const app = express();
app.listen(3000, () => {
  console.log(" this server is running");
});

app.use('/api/user',userRoutes);