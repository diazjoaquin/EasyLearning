const { Router } = require("express");
const router = Router();
const { createReviewPage } = require("./createReviewPage/controller.js");
const { getAllReviewPage } = require("./getAllReviewPage/controller.js");

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

router.get("/", async (req, res) => {
  try {
    const result = await getAllReviewPage();
    return res.json(result);
  } catch (err) {
    return res.status(500).send(`message: ${err}`);
  }
});

module.exports = router;
