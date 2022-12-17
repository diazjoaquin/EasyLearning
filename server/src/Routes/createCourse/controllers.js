const { Course, Category, Video } = require("../../db.js");
const { Op } = require("sequelize");

const createCourse = async ({
  name,
  description,
  category,
  teacher,
  price,
  video, //Array de objetos video {    name: '',    urlVideo: "",    description: "",    courseId: ""}
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
        //Agregando sus categorias al curso
        category.map(async (e) => {
          const [categoryDB, createdCategory] = await Category.findOrCreate({
            where: { name: { [Op.iLike]: e } },
            defaults: {
              name: e.slice(0, 1).toUpperCase().concat(e.slice(1)),
            },
          });
          await course.addCategory(categoryDB);
        });

        //Agregando sus videos al curso
        video.map(async (e) => {
          await Video.create({
            ...e,
            courseId: course.id,
          });
        });
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
