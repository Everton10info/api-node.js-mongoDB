const mongoose = require("mongoose")
const User = mongoose.model("User")
const crypto = require("crypto-js");


module.exports = {
  async showUsers(req, res) {
    const users = await User.find();
    return res.json(users)
  },

  async createUser(req, res) {

    var { name, email, password } = req.body;

    var user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({ error: 'Usuário já existe!' })
    }

    var passwordEncrypt = crypto.AES.encrypt(JSON.stringify(password), 'dragon food').toString();

    
    password = passwordEncrypt;


    const userNew = await User.create({ name, email, password });
    return (res.json(userNew));
  },

  async deleteUser(req, res) {
    await User.findByIdAndRemove(req.params.id)
    return res.send()
  }
}