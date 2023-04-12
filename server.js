
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("./src/models/product")
const routes = require('./src/routes');

const app = express();
app.use(express.json());

const Product = mongoose.model("Product")

app.use("/api", routes);


app.listen(3001);

require("./data_base/db_conection")
