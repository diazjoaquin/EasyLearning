const { Course, Category } = require("../../db.js");
const { Op } = require("sequelize");

const createCourse = async ({
  name,
  description,
  category,
  teacher,
  price,
}) => {
  try {
    if (name && description && category && teacher) {
      const [course, createdCourse] = await Course.findOrCreate({
        where: { name: { [Op.iLike]: name } },
        defaults: {
          name,
          description,
          teacher,
          price,
        },
      });

      //Si el curso fue creado
      if (createdCourse) {
        //Si agrega mas de una categoria, esto tendria que ser un map.
        const [categoryDB, createdCategory] = await Category.findOrCreate({
          where: { name: { [Op.iLike]: category } },
          defaults: {
            name: category.slice(0, 1).toUpperCase().concat(category.slice(1)),
          },
        });
        await course.addCategory(categoryDB);
      }

      return createdCourse
        ? "Curso creado exitosamente."
        : "Ya existe un curso con ese nombre.";
    } else {
      return {
        message:
          "Alguna de las propiedades de curso es null [name/description/teacher/category]",
      };
    }
  } catch (error) {
    return error;
  }
};

module.exports = { createCourse };
