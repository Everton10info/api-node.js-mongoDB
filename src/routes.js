const express = require("express");
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.showProducts);
routes.post("/products", ProductController.createProduct );
routes.delete("/product/:id",ProductController.deleteProduct);




module.exports = routes;