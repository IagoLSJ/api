const mongoose = require("mongoose")

const booking = mongoose.Schema({
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
    },
    horario:{
        type:mongoose.Schema.Types.String
    },
    data:{
        type:mongoose.Schema.Types.String
    }
})

module.exports = mongoose.model("bookings", booking)