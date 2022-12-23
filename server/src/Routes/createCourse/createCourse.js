const { Router } = require("express");
const router = Router();
const { createCourse } = require("./controllers");
const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
  destination: path.join(__dirname, "../../upload"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileUpload = multer({
  storage: diskStorage,
}).single("image");

router.post("/", fileUpload, async (req, res) => {
  try {
    console.log(req.file);
    console.log("el body: ", req.body);
    res.json(await createCourse(req.body, req.file));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
