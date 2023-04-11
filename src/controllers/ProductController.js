const mongoose = require("mongoose")
const Product = mongoose.model("Product")


module.exports ={
  async showProducts(req, res){
        const product = await  Product.find();
        return res.json(product)
    },
}