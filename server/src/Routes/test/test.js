const { Router } = require("express");
const router = Router();
const { Course, Category, User } = require("../../db.js");
const { Op } = require("sequelize");

//ruta creada para testear
router.post("/", async (req, res) => {
  try {
    const { fullName, password, phoneNumber, emailAdress } = req.body;
    //Create user
    const user = await User.create({
      fullName,
      password,
      phoneNumber,
      emailAdress,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
