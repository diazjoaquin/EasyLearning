const { Router } = require("express");
const router = Router();
const createCourse = require("./controllers");

router.post("/", createCourse);

module.exports = router;
