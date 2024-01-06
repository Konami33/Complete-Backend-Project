//first of all import dotenv config
//require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

//Database connection using this function
connectDB()