const { Course, Category, Rating } = require("../../db.js");
const { Op } = require("sequelize");

const createCourse = async (req, res) => {
  try {
    const { name, description, teacher, category } = req.body;

    if (name && description && teacher && category) {
      const [course, createdCourse] = await Course.findOrCreate({
        where: { name: { [Op.iLike]: name } },
        defaults: {
          name,
          description,
          teacher,
        },
      });

      const [categoryDB, createdCategory] = await Category.findOrCreate({
        where: { name: { [Op.iLike]: category } },
        defaults: {
          name: category.slice(0, 1).toUpperCase().concat(category.slice(1)),
        },
      });

      const ratingDB = await Rating.create({
        score: "undefined",
      });

      await course.addCategory(categoryDB);
      await course.setRating(ratingDB);

      res.json(
        createdCourse
          ? "Curso creado exitosamente."
          : "Ya existe un curso con ese nombre."
      );
    } else {
      res.json({
        message:
          "Alguna de las propiedades de curso es null [name/description/teacher/category]",
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = createCourse;
