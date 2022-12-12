const { Router } = require("express");
const router = Router();
const { createVideo } = require("./controllers");

router.post("/", async (req, res) => {
  try {
    res.json(await createVideo(req.body));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
