const {
  Course,
  Category,
  // Review,
  // Video,
  // Comments,
  User,
} = require("../../db.js");

const getAllCoursesByTeacher = async ({ id }) => {
  try {
    //Busco en la tabla user, el nombre del usuario
    let fullNameUser = await User.findByPk(id);
    fullNameUser = fullNameUser.fullName;

    //Filtro de la trabla coruses, todos los cursos que tengan como teacher a fullNameUser
    let listCourses = await Course.findAll({
      where: { teacher: fullNameUser },
      include: {
        model: Category,
      },
    });

    listCourses = listCourses.map((e) => ({
      id: e.id,
      teacher: e.teacher,
      name: e.name,
      description: e.description,
      rating: e.rating,
      price: e.price,
      image: e.image,
      categories: e.categories.map((e) => e.name),
    }));

    return listCourses;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCoursesByTeacher };
