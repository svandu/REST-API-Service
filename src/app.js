// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./db/index.js";
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

/**
 * Load all the envirnoment variables on the initial load of first entry point
*/
dotenv.config({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
}
)
.catch((err) => {
    console.log("MONGODB Connection FAILED !!!", err);
})