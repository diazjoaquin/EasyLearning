const { Router } = require("express");
const router = Router();
const getAllCourses = require("./getAllCourses/getAllCourses.js");

router.use("/getAllCourses", getAllCourses);

module.exports = router;
