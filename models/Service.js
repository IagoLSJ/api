const mongoose = require("mongoose")

const service = mongoose.Schema({
  price: {
    type: Number
  },
  servicesOffered: {
    type: [],
  }
})

module.exports = mongoose.model("services", service)