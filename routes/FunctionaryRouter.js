const router = require("express").Router()
const FunctionaryController = require("../controller/FunctionaryController")

router.post("/create-functionary", FunctionaryController.createFunctionary)
router.get("/list",FunctionaryController.listFuncionary)
router.get("/:id", FunctionaryController.listById)
router.patch("/:id", FunctionaryController.edit)
router.delete("/:id", FunctionaryController.deleteById)

module.exports = router