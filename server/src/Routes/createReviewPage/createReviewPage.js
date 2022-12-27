const { Router } = require("express");
const router = Router();
const { createReviewPage } = require("./controllers");

router.post("/", async (req, res) => {
  try {
    const reviewData = {
      score: req.body.score,
      title: req.body.title,
      comments: req.body.comments,
      userId: req.body.userId,
    };
    return res.json(await createReviewPage(reviewData));
  } catch (err) {
    return res.json(err.message);
  }
});

module.exports = router;
