const { Router } = require("express");
const { getCategories } = require("./controllers");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.json(await getCategories());
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
