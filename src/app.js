const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const connectDB = require("./db/index.js");
const app = express()

/**
 * Load all the envirnoment variables on the initial load of first entry point
*/
dotenv.config()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
// const healthCheck = require("./routes/healthcheck.routes.js")
const productRoute = require("./routes/product.routes.js")
const userRoute = require("./routes/user.routes.js")
const cartRoute = require("./routes/cart.routes.js")

//routes declaration 
// app.use("/api/v1", healthCheck)

app.use("/api/v1", productRoute)
app.use("/api/v1/user", userRoute)
app.use("/api/v1", cartRoute)

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
