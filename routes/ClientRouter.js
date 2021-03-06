const router = require("express").Router()
const ClientController = require("../controller/ClientController")

router.get("/",ClientController.list)
router.post("/", ClientController.create)
router.put("/", ClientController.edit)
router.delete("/", ClientController._delete)


module.exports = router