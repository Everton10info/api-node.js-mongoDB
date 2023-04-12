const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
   description:{
        type: String,
        require:true,
        
    },   /*
    local:{
        type:String,
        require:true,
    },
     price:{
        type: Int16Array,
        reuired: true,

     },

     urlImage:{
        type:String,
        require: true
     }*/

})
;

mongoose.model("Product", ProductSchema)