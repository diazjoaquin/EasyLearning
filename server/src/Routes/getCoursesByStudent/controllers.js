const { Course, Category } = require("../../db.js");

const getCoursesByStudent = async ({ id }) => {
  try {
    let cursos = await Course.findAll({
      include: {
        model: Category,
      },
    });
    cursos = cursos?.filter((e) => e.students.includes(parseInt(id)));
    return cursos;
  } catch (error) {
    return error;
  }
};

module.exports = { getCoursesByStudent };
