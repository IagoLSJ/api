const router = require("express").Router()
const ClientController = require("../controller/ClientController")

router.post("/", ClientController.create)
router.get("/",ClientController.list)
router.get("/:id", ClientController.listById)
router.put("/:id", ClientController.edit)
router.delete("/:id", ClientController.deleteById)

module.exports = router