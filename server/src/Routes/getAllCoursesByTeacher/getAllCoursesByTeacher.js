const { Router } = require("express");
const { getAllCoursesByTeacher } = require("./controllers.js");
const router = Router();

router.get("/:id", async (req, res) => {
  try {
    res.json(await getAllCoursesByTeacher(req.params));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
