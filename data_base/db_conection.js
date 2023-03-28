const { default: mongoose } = require("mongoose");

const mongose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const connect = ()=> {
    mongoose.connect(`mongodb+srv://bestfood:pamela@cluster0.crzbuip.mongodb.net/test?retryWrites=true&w=majority`);
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