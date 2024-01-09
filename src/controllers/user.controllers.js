const User = require("../models/user.model.js");
const ApiError = require("../utils/ApiError.js");
const bcrypt = require("bcrypt");

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    const refreshToken = await user.generateRefreshToken();
    const accessToken = await user.generateAccessToken();

    //field in user model refresh token so store the new generated refresh token in that field
    user.refreshToken = refreshToken;

    //dont want to validate before saving
    await user.save({ validateBeforeSave: false });

    return { refreshToken, accessToken };
  } catch (error) {
    console.log("Error in generateAccessAndRefreshToken: ", error)
    throw new ApiError(
      500,
      "Something went wrong while generating access token and refresh token"
    );
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});

    return res.status(200).json(user);
  } catch (error) {
    throw new ApiError(500, "Something wnet wrong while fetching all users");
  }
};

const registerUser = async (req, res) => {
  //get all users details from frontend
  try {
    const { username, email, fullName, password } = req.body;

    //check the validation that if the username and email is not available

    if (!(username || email)) {
      throw new ApiError(400, "All fields are required");
    }

    //check if the user is already exist or not

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      throw new ApiError(409, "User with email and username already exist");
    }

    const newUser = new User({
      username,
      email,
      fullName,
      //storing the password before save
      password: await bcrypt.hash(password, 10),
    });

    await newUser.save();

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

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!(username || email)) {
    throw new ApiError(400, "Email or username is required");
  }

  //find the user exist or not

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  //if user does not exist

  if (!user) {
    throw new ApiError(404, "User does not exit");
  }

  //compare the provided password is correct or not
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new ApiError(401, "Incorrect password");
  }

  const { refreshToken, accessToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  return res.status(200).json({
    message: "User logged in successfully",
    user: loggedInUser,
    refreshToken,
    accessToken,
  });

  // second method to show the tokens inside the user object 
  // Include refreshToken and accessToken in the user object
  // const loggedInUser = {
  //   ...user.toObject(),
  //   refreshToken,
  //   accessToken,
  // };

  // Exclude sensitive information before sending the response
  // delete loggedInUser.password;
  // delete loggedInUser.refreshToken;

  // return res.status(200).json({
  //   message: "User logged in successfully",
  //   user: loggedInUser,
  // });
};


module.exports = {
  registerUser,
  loginUser,
  getAllUser,
};
