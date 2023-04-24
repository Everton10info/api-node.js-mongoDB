const mongoose = require("mongoose")
const User = mongoose.model("User")


module.exports = {
  async showUsers(req, res) {
    const user = await User.find();
    return res.json(user)
  },

  async createUser(req, res) {
 const userExists = await User.findOne({where:{email:req.body.email}});

  if(userExists){
       return res.status(400).json({error: 'Usuário já existe!'})
    }
    const user = await User.create(req.body);
    return (res.json(user));
  },

  async deleteUser(req, res) {
    await User.findByIdAndRemove(req.params.id)
    return res.send()
  }
}