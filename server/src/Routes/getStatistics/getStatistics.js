const { Router } = require("express");
const router = Router();
const { getStatistics } = require("./controllers");

router.get("/", async (req, res) => {
  try {
    let result = await getStatistics();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
