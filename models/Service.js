const mongoose = require("mongoose")

const service = mongoose.model("Service",{
  client : String,
  employee : String,
  hourly:String,
  day:String,
})

module.exports = service