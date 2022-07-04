const mongoose = require("mongoose")

const employee = mongoose.Schema({
    cpf: {
        type: Number
    },
    nome: {
        type: String
    },
    salario: {
        type: Number
    },
    profissoes: {
        type: []
    }
})

module.exports = mongoose.model("employees", employee)