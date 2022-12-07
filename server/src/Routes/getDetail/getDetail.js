const { Router } = require("express");
const router = Router();
const { getCourseById } = require("./controllers");

router.get("/", async (req, res) => {
  const { id } = req.params;

  try {
    let result = getCourseById(id);
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
