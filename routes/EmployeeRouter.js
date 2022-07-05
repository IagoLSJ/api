const router = require("express").Router()
const EmployeeController = require("../controller/EmployeeController")

router.post("/", EmployeeController.create)
router.get("/",EmployeeController.list)
router.get("/:id", EmployeeController.listById)
router.put("/:id", EmployeeController.edit)
router.delete("/:id", EmployeeController.deleteById)
router.get("/:id/:date", EmployeeController.servicesDay) // mover essa rota para o BookingController
module.exports = router