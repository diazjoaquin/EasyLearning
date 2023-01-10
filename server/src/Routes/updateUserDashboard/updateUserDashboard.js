const { Router } = require("express");
const router = Router();
const { updateUserDashboard } = require("./controllers.js");

router.patch("/", async (req, res) => {
  try {
    console.log("1", req.body);
    res.send(await updateUserDashboard(req.body));
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
