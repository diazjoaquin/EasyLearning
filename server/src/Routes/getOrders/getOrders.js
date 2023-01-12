const { Router } = require("express");
const router = Router();
const { getAllOrders } = require("./controllers");

router.get("/", async (req, res) => {
  try {
    res.json(await getAllOrders());
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
