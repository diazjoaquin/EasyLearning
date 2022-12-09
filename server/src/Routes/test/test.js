const { Router } = require("express");
const router = Router();
const { Course, Category } = require("../../db.js");
const { Op } = require("sequelize");

//ruta creada para testear
router.post("/", async (req, res) => {
  // try {
  //   const { name, description, teacher, categoryName } = req.body;
  //   const [course, createdCourse] = await Course.findOrCreate({
  //     where: { name: { [Op.iLike]: name } },
  //     defaults: {
  //       name,
  //       description,
  //       teacher,
  //     },
  //   });
  //   const [category, createdCategory] = await Category.findOrCreate({
  //     where: { name: { [Op.iLike]: categoryName } },
  //     defaults: {
  //       name: categoryName
  //         .slice(0, 1)
  //         .toUpperCase()
  //         .concat(categoryName.slice(1)),
  //     },
  //   });
  //   await course.addCategory(category);
  //   res.json(
  //     createdCategory
  //       ? "Curso creado exitosamente."
  //       : "Ya existe un curso con ese nombre."
  //   );
  // } catch (error) {
  //   res.json(error);
  // }
});

module.exports = router;
