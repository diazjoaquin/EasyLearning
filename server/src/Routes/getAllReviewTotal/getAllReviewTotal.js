const { Router } = require("express");
const router = Router();
const { getAllReviewTotal } = require("./controllers.js");


router.get("/", async (req, res) => {
    try{
        const result = await getAllReviewTotal();
    
        return res.json(result);
    } catch (err) {
      return res.status(500).send(`message: ${err}`);
    }
  });

  module.exports = router;