const mongoose = require("mongoose")

const booking = mongoose.Schema({
    nome: {
        type: String
    },
    preco: {
        type: Number
    },
    funcionarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: require("../models/Employee"),
    },
    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: require("../models/Client"),
    },
    servicoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: require("../models/Service"),
    }

})

module.exports = mongoose.model("bookings", booking)