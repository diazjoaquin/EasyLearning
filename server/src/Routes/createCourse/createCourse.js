const { Router } = require("express");
const router = Router();
const { createCourse } = require("./controllers");

router.post("/", async (req, res) => {
  try {
    res.json(await createCourse(req.body));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
