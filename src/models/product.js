
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    local: {
        type: String,
    },
    price: {
        type: Number,
        reuired: true,
    },
    urlImage: {
        type: String,

    }

})
    ;

mongoose.model("Product", ProductSchema)