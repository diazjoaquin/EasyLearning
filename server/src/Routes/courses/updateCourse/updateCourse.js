const { Router } = require("express");
const router = Router();
const { updateCourse } = require("./controllers");

router.patch("/", async (req, res) => {
  try {
    res.json(await updateCourse(req.body));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
