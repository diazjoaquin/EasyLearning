const { Router } = require("express");
const { getTeachers } = require("./getAllTeachers/controller.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.json(await getTeachers());
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
