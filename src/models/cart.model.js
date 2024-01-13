const { mongoose, Schema } = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
