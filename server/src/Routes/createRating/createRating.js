const { Router } = require("express");
const router = Router();
const { createRating } = require("./controllers");

router.post("/", async (req, res) => {
  try {
    let result = await createRating(req.body);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
