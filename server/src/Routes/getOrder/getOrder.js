const { Router } = require("express");
const router = Router();
const { getOrders } = require("./controllers");

router.get("/:userId", async (req, res) => {
  try {
    res.json(await getOrders(req.params));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
