const router = require("express").Router()
const ServiceRouter = require("../controller/ServiceController")

router.post("/", ServiceRouter.create)
router.get("/",ServiceRouter.list)
router.put("/", ServiceRouter.edit)
router.delete("/", ServiceRouter._delete)

module.exports = router