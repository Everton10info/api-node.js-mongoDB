const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
   email:{
        type: String,
        require:true,
        
    },  
    password:{
        type: String,
        require:true,
        
    }, 

})
;

mongoose.model("User", UserSchema)