const { Router } = require("express");
const { getAllCourses } = require("./getAllCourses/controller.js");
const { createCourse } = require("./createCourse/controller.js");
const { deleteCourse } = require("./deleteCourse/controller.js");
const { getByName } = require("./getByName/controller.js");
const { getCourseById } = require("./getDetail/controller");
const {
  getAllCoursesByTeacher,
} = require("./getAllCoursesByTeacher/controller.js");
const { getCoursesByStudent } = require("./getCoursesByStudent/controller.js");

const router = Router();
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

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      res.json(await getByName(name));
    } else {
      res.json(await getAllCourses());
    }
  } catch (error) {
    res.json(error);
  }
});

router.post("/", fileUpload, async (req, res) => {
  try {
    res.json(await createCourse(req.body, req.file));
  } catch (error) {
    res.json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await deleteCourse(req.params));
  } catch (error) {
    res.json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let result = await getCourseById(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.get("/teacher/:id", async (req, res) => {
  try {
    res.json(await getAllCoursesByTeacher(req.params));
  } catch (error) {
    res.json(error);
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    res.json(await getCoursesByStudent(req.params));
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
