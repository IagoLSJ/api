const router = require("express").Router()
const EmployeeController = require("../controller/EmployeeController")

router.post("/", EmployeeController.create)
router.get("/",EmployeeController.list)
router.put("/", EmployeeController.edit)
router.delete("/", EmployeeController._delete)

module.exports = router