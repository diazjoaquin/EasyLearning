const { Router } = require("express");
const router = Router();
const getAllCourses = require("./getAllCourses/getAllCourses.js");
const getAllCategories = require("./get all categories/getAllCategories.js")


router.use("/getAllCourses", getAllCourses);
router.use("/categories", getAllCategories)

module.exports = router;
