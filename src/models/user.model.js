const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      lowercase: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      unique: true,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//custom methods to generate access token and refresh token

userSchema.methods.generateAccessToken = async function (){
  // jwt.sign method to create a JSON Web Token (JWT) in a Node.js environment

  // .sign take there parameters
  return jwt.sign(
    {
      // payloads: it contains the inforamtion about the user
      _id: this._id,
      username: this.username,
      email: this.email,
      fullName: this.fullName,
    },
    //second is the secret key to generate the access tokens from the env file
    process.env.ACCESS_TOKEN_SECRET,
    {
      // The third parameter is an options object. It specifies the expiration time (expiresIn) for the token.
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

// we are doing same with refresh token as it has less information because it is refreshing again and again

userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

const User = mongoose.model("User", userSchema);

module.exports = User;
