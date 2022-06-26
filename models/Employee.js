const mongoose = require("mongoose")

const employee = mongoose.model("Employee", {
    cpf: Number,
    nome: String,
    salario: Number,
    profissoes: [],
})


module.exports = employee