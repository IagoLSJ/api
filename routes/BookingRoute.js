const route = require("express").Router()
const bookingController = require("../controller/BookingController")

route.get("/", bookingController.list)
route.get("/:id", bookingController.listById)
route.post("/", bookingController.create)
route.put("/:id", bookingController.edit)
route.delete("/:id", bookingController.deleteById) 

module.exports = route