const mongoose = require("mongoose")

const mongoConnection = mongoose.connect("mongodb://localhost:27017/pds").then(() =>{
        console.log("Banco conectado")
    }).catch((erro) => {
        console.log(erro)
    })
module.exports = mongoConnection