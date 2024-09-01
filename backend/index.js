import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./route/book.route.js";
import urouter from "./route/user.router.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config(); 
const PORT=process.env.PORT || 4000;
const MONGODB = process.env.MONGODBURI;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

try {
    mongoose.connect(MONGODB,{

    });
    console.log("connected to mongoDB");
} catch (error) {
    console.log("Error: ",error)
}
app.use("/book",router);
app.use("/user",urouter);
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})