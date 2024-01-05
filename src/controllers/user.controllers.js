const User = require("../models/user.model");

const registerUser = async (req, res) => {
  try {
    const { username, email, fullName, password } = req.body;

    console.log("User body: ", req.body);

    const newUser = new User({
      username,
      email,
      fullName,
      password,
    });

    await newUser.save();

    console.log("New user details", newUser);

    res.status(200).json({
      message: "User Created successfully",
      newUser: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        fullName: newUser.fullName,
        password: newUser.password,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("User not created", error);
  }
};

module.exports = {
  registerUser,
};
