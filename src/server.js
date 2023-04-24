
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("./models/product")
require("./models/user")
const routes = require('./routes');

const app = express();
app.use(express.json());

//const Product = mongoose.model("Product")
//const User = mongoose.model("User")

app.use("/api", routes);


app.listen(3001);

require("../data_base/db_conection")
