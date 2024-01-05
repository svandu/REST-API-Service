const mongoose = require("mongoose");

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
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
