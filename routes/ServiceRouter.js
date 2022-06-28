const router = require("express").Router()
const ServiceRouter = require("../controller/ServiceController")

router.post("/", ServiceRouter.create)
router.get("/",ServiceRouter.list)
router.get("/:id", ServiceRouter.listByIdEmployee)
router.put("/:id", ServiceRouter.edit)
router.delete("/:id", ServiceRouter.deleteById)

module.exports = router