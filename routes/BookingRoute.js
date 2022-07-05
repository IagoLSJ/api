const route = require("express").Router()
const bookingController = require("../controller/BookingController")

route.get("/", bookingController.list)
route.post("/", bookingController.create)
route.put("/", bookingController.edit)
route.delete("/", bookingController.deleteById)

module.exports = route