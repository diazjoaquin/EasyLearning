const { Router } = require("express");
const router = Router();
const { getOrders } = require("./getOrder/controller.js");
const { createOrder } = require("./createOrder/controller.js");

router.get("/:userId", async (req, res) => {
  try {
    res.json(await getOrders(req.params));
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await createOrder(req.body));
  } catch (error) {}
});

module.exports = router;
