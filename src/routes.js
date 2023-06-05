const express = require("express");
const routes = express.Router();
const authMiddleware = require("./middlewares/auth")
const ProductController = require('./controllers/ProductController');
const SessionController  = require("./controllers/SessionController");
const UserController = require("./controllers/UserController");

routes.post("/session", SessionController.store);
routes.post("/user",UserController.createUser);
routes.get("/products", ProductController.showProducts);
routes.get("/verify-login", authMiddleware.loginIn);

routes.use(authMiddleware.auth);

routes.get("/products/:category", ProductController.showCategory);
routes.post("/product", ProductController.createProduct );
routes.post("/dailyDeal", ProductController.createDailyDeal );
routes.delete("/product/:id",ProductController.deleteProduct);
//routes.delete("/product",ProductController.deleteProduct);



routes.get("/users", UserController.showUsers);
routes.delete("/user/:id",UserController.deleteUser);






module.exports = routes;