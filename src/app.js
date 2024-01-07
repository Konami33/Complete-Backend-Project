import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

//corse configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//middleware setup
app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public")) //to store public assests
app.use(cookieParser()) //access cookies from server

//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)




export { app }