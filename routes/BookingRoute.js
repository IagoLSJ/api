const route = require("express").Router()
const bookingController = require("../controller/BookingController")

route.get("/", bookingController.list)
route.post("/", bookingController.create)
route.put("/", bookingController.edit)
route.delete("/", bookingController._delete)
route.get("/isAvailabilityHour", bookingController.isAvailabilityHour)
route.get("/bookingsOfDay", bookingController.bookingsOfDay)

module.exports = route