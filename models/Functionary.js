const mongoose = require("mongoose")

const functionary = mongoose.model("Functionary", {
    cpf: Number,
    nome: String,
    salario: Number,
    profissoes: [],
})


module.exports = functionary