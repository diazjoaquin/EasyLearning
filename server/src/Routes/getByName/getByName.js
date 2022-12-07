const { Router } = require("express");
const axios = require("axios");
const router = Router();
const getByName = require("./controllers").default

router.get("/", getByName)

module.exports = router;