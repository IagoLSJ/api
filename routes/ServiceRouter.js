const router = require("express").Router()
const ServiceRouter = require("../controller/ServiceController")

router.post("/", ServiceRouter.create)
router.get("/",ServiceRouter.list)
router.put("/:id", ServiceRouter.edit)
router.delete("/:id", ServiceRouter.deleteById)

module.exports = router