const { Router } = require("express");
const router = Router();
const { getOrdersById } = require("./controllers");

router.get("/:userId", getOrdersById)//Modify like the others

module.exports = router;