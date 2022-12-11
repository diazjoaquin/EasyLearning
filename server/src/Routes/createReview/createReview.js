const { Router } = require("express");
const router = Router();
const { createReview } = require("./controllers");

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

module.exports = router;
