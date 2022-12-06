import { Router } from "express";
const getAllCourses = require("./getAllCourses/index.ts");

const router = Router();

router.use("/prueba", getAllCourses);

module.exports = router;
