const { Router } = require("express");
const router = Router();
const { getOrders } = require("./controllers");

router.get("/", async (req, res) => {
  try {
    res.json(await getOrders(req.body));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
