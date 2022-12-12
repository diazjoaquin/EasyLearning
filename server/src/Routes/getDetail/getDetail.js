const { Router } = require("express");
const router = Router();
const { getCourseById } = require("./controllers");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let result = await getCourseById(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
