const { Course, Category, Video, User } = require("../../../db.js");

const getAllCoursesByTeacher = async ({ id }) => {
  try {
    //Busco en la tabla user, el nombre del usuario
    let user = await User.findByPk(id);

    //Filtro de la trabla coruses, todos los cursos que tengan como teacher a fullNameUser
    let listCourses = await Course.findAll({
      where: { teacherId: user.id },
      include: [
        {
          model: Category,
        },
        {
          model: Video,
          attributes: ["id", "urlVideo", "description", "nameVideo"],
        },
      ],
    });

    listCourses = listCourses.map((e) => ({
      id: e.id,
      teacherName: e.teacherName,
      name: e.name,
      description: e.description,
      rating: e.rating,
      price: e.price,
      image: e.image,
      categories: e.categories.map((e) => e.name),
      archieved: e.archieved,
      status: e.status,
      videos: e.videos,
    }));

    return listCourses;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCoursesByTeacher };
