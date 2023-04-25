
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        require: true
    },
    local: {
        type: String,
        require:true
    },
    ingredients: {
        type: String
    },
    deliveryPrice: {
        type: Number,
        require:true
    },

    urlImage: {
        type: String

    }

})
    ;

mongoose.model("Product", ProductSchema)