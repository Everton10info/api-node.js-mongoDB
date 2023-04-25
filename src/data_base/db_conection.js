const { default: mongoose } = require("mongoose");

const mongose = require("mongoose");
require('dotenv').config();
const dbUser = process.env.USER;
const dbPass = process.env.PASS;



const connect = ()=> {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.crzbuip.mongodb.net/test?retryWrites=true&w=majority`);
    const connection = mongoose.connection

     connection.on("error", ()=>{
        console.log("error ao conectar banco de dados")
     }) 

     connection.on("open", ()=>{
        console.log("Conectado banco de dados")
     }) 



}

connect();

module.exports = mongoose;