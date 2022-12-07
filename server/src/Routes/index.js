const { Router } = require("express");
const router = Router();
const getAllCourses = require("./getAllCourses/getAllCourses.js");
const createCourse = require("./createCourse/createCourse.js");
const getByName = require("./getByName/getByName.js");
const getDetail = require("./getDetail/getDetail.js");
const getAllCategories = require("./getAllCategories/getAllCategories.js");

router.use("/getAllCourses", getAllCourses);
router.use("/getDetail", getDetail);
router.use("/createCourse", createCourse);
router.use("/getByName", getByName);
router.use("/categories", getAllCategories);

module.exports = router;
