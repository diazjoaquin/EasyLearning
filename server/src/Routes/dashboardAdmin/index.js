const { Router } = require("express");
const router = Router();
const { getStatistics } = require("./getStatistics/controller.js");
const { getAllOrders } = require("./getOrders/controller.js");
const { getAllReviewTotal } = require("./getAllReviewTotal/controller.js");
const { updateUserDashboard } = require("./updateUserDashboard/controller.js");

router.get("/statistics", async (req, res) => {
  try {
    let result = await getStatistics();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.get("/orders", async (req, res) => {
  try {
    res.json(await getAllOrders());
  } catch (error) {
    console.log(error);
  }
});

router.get("/reviews", async (req, res) => {
  try {
    const result = await getAllReviewTotal();

    return res.json(result);
  } catch (err) {
    return res.status(500).send(`message: ${err}`);
  }
});

router.patch("/users", async (req, res) => {
  try {
    res.send(await updateUserDashboard(req.body));
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
