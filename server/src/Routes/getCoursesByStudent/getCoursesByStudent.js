const { Router } = require("express");
const { getCoursesByStudent } = require("./controllers.js");
const router = Router();

router.get("/:id", async (req, res) => {
  try {
    res.json(await getCoursesByStudent(req.params));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
