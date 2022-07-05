const mongoose = require("mongoose")

const client = mongoose.Schema({
  nome: {
    type: String
  },
  cpf: {
    type: Number
  },
  telefone: {
    type: Number
  },
  email: {
    type: String
  }
})

module.exports = mongoose.model("clients", client)
