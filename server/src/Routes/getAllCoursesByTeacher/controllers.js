const {
  Course,
  Category,
  Review,
  Video,
  Comments,
  User,
} = require("../../db.js");

const getAllCoursesByTeacher = async ({ id }) => {
  try {
    //Busco en la tabla user, el nombre del usuario
    let fullNameUser = await User.findByPk(id);
    fullNameUser = fullNameUser.fullName;

    //Filtro de la trabla coruses, todos los cursos que tengan como teacher a fullNameUser
    const listCourses = await Course.findAll({
      where: { teacher: fullNameUser },
    });

    return listCourses;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCoursesByTeacher };
