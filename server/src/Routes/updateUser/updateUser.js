const { Router } = require("express");
const { updateUser } = require("./controller");
const router = Router();

router.patch("/", async (req, res) => {
  try {
    res.send(await updateUser(req.body));
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
