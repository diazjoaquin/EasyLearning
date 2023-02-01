const { Router } = require("express");
const router = Router();
const { createUser } = require("./createUser/controllers.js");
const { getUserByEmail } = require("./getUserByEmail/controller.js");
const { getUsers } = require("./getUsers/controller.js");
const { updateUser } = require("./updateUser/controller.js");

//ruta creada para testear
router.post("/", async (req, res) => {
  try {
    res.json(await createUser(req.body));
  } catch (error) {
    res.json(error);
  }
});

router.get("/email", async (req, res) => {
  try {
    return res.json(await getUserByEmail(req.query));
  } catch (err) {
    return res.json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const userList = await getUsers();
    return res.json(userList);
  } catch (err) {
    return res.status(500).send(`message: ${err}`);
  }
});

router.patch("/", async (req, res) => {
  try {
    res.send(await updateUser(req.body));
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
