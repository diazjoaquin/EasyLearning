const { Router } = require("express");
const router = Router();
const getAllCourses = require("./getAllCourses/getAllCourses.js");
const createCourse = require("./createCourse/createCourse.js");
const getByName = require("./getByName/getByName.js");
const getDetail = require("./getDetail/getDetail.js");
const getAllCategories = require("./getAllCategories/getAllCategories.js");
const updateCourse = require("./updateCourse/updateCourse.js");
const createUser = require("./createUser/createUser.js");
const createCommentVideo = require("./createComment_Video/createComment_Video.js");
const createVideo = require("./createVideo/createVideo.js");
// const createUser = require("./test/test.js");

router.use("/getAllCourses", getAllCourses);
router.use("/getDetail", getDetail);
router.use("/createCourse", createCourse);
router.use("/getByName", getByName);
router.use("/categories", getAllCategories);
router.use("/updateCourse", updateCourse);
router.use("/createUser", createUser);
router.use("/createCommentVideo", createCommentVideo);
// router.use("/createUser", createUser);
router.use("/createVideo", createVideo);

module.exports = router;
