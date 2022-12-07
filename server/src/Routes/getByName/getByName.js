const { Router } = require("express");
const router = Router();
const getByName = require("./controllers");

router.get("/", getByName);

module.exports = router;
