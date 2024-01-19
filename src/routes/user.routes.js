const Router = require("express");
const {
  registerUser,
  loginUser,
  getAllUser,
} = require("../controllers/user.controllers.js");
const upload = require("../middlewares/multer.middlewares.js");

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "profileImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
router.route("/allusers").get(getAllUser);

module.exports = router;
