const { Router } = require("express");
const router = Router();
const { getUserByEmail } = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    return res.json(await getUserByEmail(req.query));
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
