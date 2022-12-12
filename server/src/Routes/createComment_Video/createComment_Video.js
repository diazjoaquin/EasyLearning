const { Router } = require("express");
const router = Router();
const { createCommentVideo } = require("./controllers.js");

router.post("/", async (req, res) => {
  try {
    res.json(await createCommentVideo(req.body));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
