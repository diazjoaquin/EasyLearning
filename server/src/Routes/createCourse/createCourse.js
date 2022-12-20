const { Router } = require("express");
const router = Router();
const { createCourse } = require("./controllers");
const fileUpload = require("express-fileupload");

router.post(
  "/",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  }),
  async (req, res) => {
    try {
      res.json(await createCourse(req.body, req.files));
    } catch (error) {
      res.json(error);
    }
  }
);

module.exports = router;
