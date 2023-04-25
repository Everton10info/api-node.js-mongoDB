const express = require("express");
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const SessionController  = require("./controllers/SessionController");
const UserController = require("./controllers/UserController");

routes.get("/products", ProductController.showProducts);
routes.post("/product", ProductController.createProduct );
routes.delete("/product/:id",ProductController.deleteProduct);

routes.get("/users", UserController.showUsers);
routes.post("/user",UserController.createUser);
routes.delete("/user/:id",UserController.deleteUser);

routes.post("/session", SessionController.store);





module.exports = routes;