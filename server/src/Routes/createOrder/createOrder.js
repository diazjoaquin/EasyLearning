const { Router } = require("express");
const router = Router();
const { createOrder } = require("./controllers");

router.post("/", createOrder)

module.exports = router;