const Router = require("express")
const { registerUser, loginUser, getAllUser } = require("../controllers/user.controllers.js")

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/allusers").get(getAllUser)   

module.exports = router