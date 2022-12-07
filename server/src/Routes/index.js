const { Router } = require("express");
const router = Router();
const getAllCourses = require("./getAllCourses/getAllCourses.js");
const createCourse = require("./create course/createCourse.js");

router.use("/getAllCourses", getAllCourses);
router.use("./createCourse", createCourse )

module.exports = router;
