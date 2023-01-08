const { Router } = require("express");
const router = Router();
const { deleteVideo } = require("./controllers.js");

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params);
    res.json(await deleteVideo(req.params));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
