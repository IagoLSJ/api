const mongoose = require("mongoose")

const service = mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  servicesOffered: {
    type: [],
  }
})

module.exports = mongoose.model("services", service)