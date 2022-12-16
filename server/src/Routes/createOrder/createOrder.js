const {Router} = require("express");
const router = Router();
const {createOrder} = require("./controllers.js");

router.post("/", createOrder) //add to index. 
//Modify like the others

module.exports = router;