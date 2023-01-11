const { Router } = require("express");
const router = Router();
const { deleteComments } = require("./controllers.js");

router.delete("/:id/:string", async (req, res) => {
  const id = req.params.id;
  const string = req.params.string;
  console.log(id);
  console.log(string);
  try {
    res.status(204).json(await deleteComments(id, string));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
