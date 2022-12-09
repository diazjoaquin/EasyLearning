const { Course, Category, Rating, Teacher, User } = require("../../db.js");
const { Op } = require("sequelize");

const createCourse = async ({ name, description, userId, category }) => {
  try {
    if (name && description && category) {
      const [course, createdCourse] = await Course.findOrCreate({
        where: { name: { [Op.iLike]: name } },
        defaults: {
          name,
          description,
        },
      });

      //Lo que falta es, en la tabla course, poder asignarle a la llave foranea teacherId, el usuario que es el respectivo teacher
      // const userDB = await User.findOne({
      //   where: { id: userId },
      // });
      // await course.setTeacher(userDB);

      //Si agrega mas de una categoria, esto tendria que ser un map.
      const [categoryDB, createdCategory] = await Category.findOrCreate({
        where: { name: { [Op.iLike]: category } },
        defaults: {
          name: category.slice(0, 1).toUpperCase().concat(category.slice(1)),
        },
      });
      await course.addCategory(categoryDB);

      //Vincular al curso el teacher
      await Teacher.create({
        userId: userId,
        courseId: course.id,
        teacerId: userId,
      });

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
