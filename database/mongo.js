const mongoose = require("mongoose")
//require("dotenv/config")


//const url = process.env.DBConnection


const mongoConnection = mongoose.connect("mongodb://localhost:27017/api_pds").then(() =>{
        console.log("Banco conectado")
    }).catch((erro) => {
        console.log(erro)
    })
    
module.exports = mongoConnection