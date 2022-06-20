const router = require("express").Router()
const FunctionaryController = require("../controller/FunctionaryController")
router.post("/create-functionary", FunctionaryController.createFunctionary)

router.get("/list", (req, res) =>{
    res.json({msg: "enviado"})
})


module.exports = router