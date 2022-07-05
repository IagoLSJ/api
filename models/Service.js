const mongoose = require("mongoose")

const service = mongoose.Schema({
  name: {
    type: Number
  },
  price: {
    type: Number
  },
  servicesOffered: {
    type: [],
  }
})

module.exports = mongoose.model("services", service)