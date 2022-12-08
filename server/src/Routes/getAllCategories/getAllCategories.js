const axios = require("axios");
const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://e-learning-40b30-default-rtdb.firebaseio.com/courses.json`
    );
    const categories = response.data.map((e) => e.category);
    res.send(categories);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
