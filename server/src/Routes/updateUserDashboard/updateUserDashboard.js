const { Router } = require("express");
const router = Router();
const { updateUserDashboard } = require("./controllers.js");

router.patch("/", async (req, res) => {
  try {
    res.send(await updateUserDashboard(req.body));
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
