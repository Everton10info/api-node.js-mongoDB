const mongoose = require("mongoose")
const User = mongoose.model("User")
const crypto = require("crypto-js");
require('dotenv').config;

const secretCrypto = process.env.secretCrypto;

module.exports = {
  async showUsers(req, res) {
    const users = await User.find();
    return res.json(users)
  },

  async createUser(req, res) {

    var { name, email, password } = req.body;
    if(name !== undefined && email!== undefined && password!== undefined){

      if ( name.length < 3 ) {
        return res.status(400).json({ error: 'Name precisa ter no mínimo 3 caracteres' })
      }
  
      if (!email.includes('@') || !email.includes('.com')) {
        return res.status(400).json({ error: 'Email inválido!' })
      }
  
      var user = await User.findOne({ email: email });
  
  
      if (user) {
        return res.status(400).json({ error: 'Usuário já existe!' })
      }
  
      if (password.length < 7) {
        return res.status(400).json({ error: 'Senha precisa ter no mínimo 8 caracteres' })
      }
  
  
      var passwordEncrypt = crypto.AES.encrypt(JSON.stringify(password), secretCrypto).toString();
  
      password = passwordEncrypt;
  
      const userNew = await User.create({ name, email, password });
      return (res.json(userNew));
    }else{
      return res.json('Campos obrigatório')
    }
   
  },

  async deleteUser(req, res) {
    await User.findByIdAndRemove(req.params.id)
    return res.send()
  }
}