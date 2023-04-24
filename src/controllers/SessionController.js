const jwt =require('jsonwebtoken');

const mongoose = require("mongoose");
const User = mongoose.model("User")








module.exports = {
  async store(req, res) {
    const {email,password} =req.body;

    var user = await User.findOne({email:email});
   
    if(!user){
         return res.status(401).json({error: 'Usuário não existe!'});
      }

     

      if(user.password!= password){
        return res.status(401).json({error: 'Senha incorreta!'});
      }

     const {id} = user;

    return res.json({
        user:{
          id,email,
        }, token: jwt.sign({id},'deusnocomando',{expiresIn:'1d',},),
      })


      
  },


}