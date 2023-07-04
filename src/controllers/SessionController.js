const jwt =require('jsonwebtoken');
const mongoose = require("mongoose");
const User = mongoose.model("User")
const crypto = require("crypto-js");
const envii = require("dotenv").config();

const secretToken = process.env.secretToken; 
const secretCrypto = process.env.secretCrypto; 





module.exports = {
  async store(req, res) {
    const {email,password} =req.body;

    var user = await User.findOne({email:email});
    
    if(!user){
         return res.status(401).json({error: 'Usuário não existe!'});
      }

   
      var bytes  = crypto.AES.decrypt(user.password, secretCrypto);
      var decryptedPassword = JSON.parse(bytes.toString(crypto.enc.Utf8));


      if(decryptedPassword!= password){
        return res.status(401).json({error: 'Senha incorreta!'});
      }

     const {id} = user;

    return res.json({
        user:{
          id,email,
        }, token: jwt.sign({id},secretToken,{expiresIn:'10m',},),
      })


      
  },


}