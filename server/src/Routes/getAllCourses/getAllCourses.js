const { Router } = require("express");
const { getAllCourses } = require("./controllers.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.json(await getAllCourses());
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
