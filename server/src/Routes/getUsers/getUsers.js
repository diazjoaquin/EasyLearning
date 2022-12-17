const { Router } = require("express");
const router = Router();
const { getUsers } = require("./controllers.js");

router.get("/", async (req, res) => {
    try {
        const userList = await getUsers();
        return res.json(userList);
    }
    catch (err) {
        return res.status(500).send(`message: ${err}`);
    }
});

module.exports = router;