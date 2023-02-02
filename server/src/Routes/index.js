const { Router } = require("express");
const router = Router();

const coursesRouter = require("./courses");
const usersRouter = require("./users");
const reviewsPageRouter = require("./reviewPage");
const reviewsRouter = require("./reviews");
const teacherRouter = require("./teachers");
const categoriesRouter = require("./categories");
const videosRouter = require("./videos");
const commentsVideoRouter = require("./commentsVideo");
const ordersRouter = require("./orders");
const adminRouter = require("./dashboardAdmin");

// router.use("/postMercadoPago", postMercadoPago);

router.use("/courses", coursesRouter);
router.use("/users", usersRouter);
router.use("/reviewsPage", reviewsPageRouter);
router.use("/reviews", reviewsRouter);
router.use("/teachers", teacherRouter);
router.use("/categories", categoriesRouter);
router.use("/videos", videosRouter);
router.use("/commentsVideo", commentsVideoRouter);
router.use("/orders", ordersRouter);
router.use("/admin", adminRouter);

module.exports = router;
