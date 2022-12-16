const { Course } = require("../../db.js");

const getCoursesByStudent = async ({ id }) => {
  try {
    let cursos = await Course.FindAll();
    cursos = cursos?.map((e) => e.students.includes(id));
    return cursos;
  } catch (error) {
    return error;
  }
};

module.exports = { getCoursesByStudent };
