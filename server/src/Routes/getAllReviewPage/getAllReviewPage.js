const { Router } = require("express");
const router = Router();
const { getAllReviewPage } = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    const result = await getAllReviewPage();
    return res.json(result);
  } catch (err) {
    return res.status(500).send(`message: ${err}`);
  }
});

module.exports = router;
