const Router = require("express")
const addHealthCheck = require("../controllers/healthcheck.controllers.js") 

const router = Router()

router.route("/healthcheck").get(addHealthCheck)

module.exports = router

//try and catch
//understand about sending response to client or response object 
// understand about req object and reading body payload from the req object
//database operation 