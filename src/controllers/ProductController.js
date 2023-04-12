const mongoose = require("mongoose")
const Product = mongoose.model("Product")


module.exports = {
  async showProducts(req, res) {
    const product = await Product.find();
    return res.json(product)
  },

  async createProduct(req, res) {
    const product = await Product.create(req.body);
    return (res.json(product));
  },

  async deleteProduct(req, res) {
    await Product.findByIdAndRemove(req.params.id)
    return res.send()
  }
}