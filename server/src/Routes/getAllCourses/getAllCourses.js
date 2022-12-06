const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let courses = await axios.get(
      `https://e-learning-40b30-default-rtdb.firebaseio.com/courses.json`
    );
    courses = courses.data;
    res.json(courses);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
