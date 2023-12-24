const Product = require("../models/product.models.js")

const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({})
        res.json(products)
    }catch(error){
        res.status(500).json({
            "error": "Internal Server error"
        })
    }
}

module.exports = getAllProducts