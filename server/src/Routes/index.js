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
const createReview = require("./createReview/createReview.js");
const getAllCoursesByTeacher = require("./getAllCoursesByTeacher/getAllCoursesByTeacher.js");
const getCoursesByStudent = require("./getCoursesByStudent/getCoursesByStudent.js");
const getReviews = require("./getReviews/getReviews.js");
const getUsers = require("./getUsers/getUsers.js");
const getAllTeachers = require("./getAllTeachers/getAllTeachers.js");
const getAllReviewPage = require("./getAllReviewPage/getAllReviewPage.js");
const createReviewPage = require("./createReviewPage/createReviewPage.js");
const updateUser = require("./updateUser/updateUser.js");
const getUserByEmail = require("./getUserByEmail/getUserByEmail.js");
const postMercadoPago = require("./mercadoPago/mercadoPago");
const getStatistics = require("./getStatistics/getStatistics");
const deleteCourse = require("../Routes/deleteCourse/deleteCourse.js");
const updateUserDashboard = require("../Routes/updateUserDashboard/updateUserDashboard.js");
const getAllReviewTotal = require("../Routes/getAllReviewTotal/getAllReviewTotal.js");
const createOrder  = require("./createOrder/createOrder");
const getOrders = require("./getOrder/getOrder")

// router.use("/postMercadoPago", postMercadoPago);

router.use("/getAllCourses", getAllCourses);
router.use("/getDetail", getDetail);
router.use("/createCourse", createCourse);
router.use("/getByName", getByName);
router.use("/categories", getAllCategories);
router.use("/updateCourse", updateCourse);
router.use("/createUser", createUser);
router.use("/createCommentVideo", createCommentVideo);
router.use("/createVideo", createVideo);
router.use("/createReview", createReview);
router.use("/getAllCoursesByTeacher", getAllCoursesByTeacher);
router.use("/getCoursesByStudent", getCoursesByStudent);
router.use("/getReviews", getReviews);
router.use("/getUsers", getUsers);
router.use("/getAllTeachers", getAllTeachers);
router.use("/updateUser", updateUser);
router.use("/getUserByEmail", getUserByEmail);
router.use("/getAllReviewPage", getAllReviewPage);
router.use("/createReviewPage", createReviewPage);
router.use("/getStatistics", getStatistics);
router.use("/deletedCourse", deleteCourse);
router.use("/updateUserDashboard", updateUserDashboard);
router.use("/getAllReviewTotal", getAllReviewTotal);
router.use("/createOrder",  createOrder);
router.use("/getOrders", getOrders)

// router.post('/create-order', createOrder);
// router.get('/capture-order', captureOrder);
// router.get('/cancel-order', cancelOrder);
// router.get('/orderDetails/:order_id', orderDetails);
// router.post('/create-order-pp', createOrderPP)

// router.post('/createOrder', createOrderPP)
module.exports = router;
