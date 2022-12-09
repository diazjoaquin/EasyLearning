const { Router } = require("express");
const router = Router();
const { createUser } = require("./controllers.js");

//ruta creada para testear
router.post("/", async (req, res) => {
  try {
    res.json(await createUser(req.body));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
