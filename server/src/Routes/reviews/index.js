const { Router } = require("express");
const router = Router();
const { createReview } = require("./createReview/controller.js");
const { getCourseReviews } = require("./getReviews/controller.js");
router.post("/", async (req, res) => {
  try {
    const { courseId } = req.body;
    const reviewData = {
      score: req.body.score,
      title: req.body.title,
      comments: req.body.comments,
      userId: req.body.userId,
    };
    // const review = await createReview(courseId, reviewData);
    return res.json(await createReview(courseId, reviewData));
  } catch (err) {
    return res.json(err);
  }
});

router.get("/:courseId", async (req, res) => {
  const { courseId } = req.params;
  try {
    const reviewList = await getCourseReviews(courseId);
    return res.json(reviewList);
  } catch (err) {
    return res.status(500).send(`message: ${err}`);
  }
});

module.exports = router;
