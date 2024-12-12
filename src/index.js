import mongoose from "mongoose";

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()





// import express from "express"
// const app = express()
// (async () => {
//     try {
//        await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.listen(process.env.PORT,() =>{
//     console.log(`${process.env.PORT}`)
// })
//     } catch (error) {
//         console.log(error);
//         throw err
//     }
// })