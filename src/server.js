
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("../models/product")

const app = express();
const Product = mongoose.model("Product")

app.get('/products',async (req,res)=>{
/* Product.create({
    title:'primeiro product',
    local:'https://img.freepik.com/fotos-gratis/hamburgueres-de-vista-frontal-em-um-carrinho_141793-15545.jpg?t=st=1679840842~exp=1679841442~hmac=3b63838da10d7f808975f03529018c94f2179b554af025bcaf064023e4b7d630'
     })*/

const products = await Product.find() 

return(res.json(products))
} );
app.delete('/products/:id', async(req, res)=>{
   await Product.findByIdAndRemove(req.params.id)
    return res.json()
});
  /*
app.post('/p',async (req,res)=>{
 Product.create({
       title:'primeiro product',
       local:'https://img.freepik.com/fotos-gratis/hamburgueres-de-vista-frontal-em-um-carrinho_141793-15545.jpg?t=st=1679840842~exp=1679841442~hmac=3b63838da10d7f808975f03529018c94f2179b554af025bcaf064023e4b7d630'
        })
   
  
   
   return(res.json(products))
   } );*/

app.listen(3001);

require ("../data_base/db_conection")
