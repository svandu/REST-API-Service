const {mongoose, Schema}= require("mongoose")

const cartSchema = mongoose.Schema(
    {
        CartId: {
            type: Number,
            required: true,
            unique: true,
        },
        productName: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        description: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart