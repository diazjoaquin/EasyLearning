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
    };
    const review = await createReview(courseId, reviewData);
    return res.json("Reseña creada");
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
