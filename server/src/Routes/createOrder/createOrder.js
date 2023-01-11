const { Router } = require("express");
const router = Router();
const { createOrder } = require("./controllers");

router.post("/", async (req, res) => {
  try {
    res.json(await createOrder(req.body));
  } catch (error) {}
});

module.exports = router;
