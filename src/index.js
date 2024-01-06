//first of all import dotenv config
//require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

//Database connection using this function
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
}) //as it is a async function. thats why it will return a promise
.catch((err) => {
    console.log("MONGODB connection error ", err)
})