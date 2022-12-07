const { Router } = require("express");
const axios = require("axios");
const router = Router();
const createCourse = require("./controllers").default

router.post("/", createCourse )

module.exports = router;