const mongoose = require("mongoose")
require("dotenv/config")


const url = process.env.DBConnection


/* const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
} */

const mongoConnection = mongoose.connect(url).then(() =>{
        console.log("Banco conectado")
    }).catch((erro) => {
        console.log(erro)
    })
    
module.exports = mongoConnection