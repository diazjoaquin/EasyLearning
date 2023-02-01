const { Course, Category, Video } = require("../../../db.js");
const { Op } = require("sequelize");
const { uploadImage } = require("../../../cloudinary.js");
const fs = require("fs-extra");

const createCourse = async (
  {
    name,
    description,
    category,
    teacherId,
    teacherName,
    price,
    video, //Array de objetos video {    name: '',    urlVideo: "",    description: "",    courseId: ""}
    image,
  },
  file
) => {
  try {
    // if (true || (name && description && category && teacher)) {
    const [course, createdCourse] = await Course.findOrCreate({
      where: { name: { [Op.iLike]: name } },
      defaults: {
        name,
        description,
        teacherId: parseInt(teacherId),
        teacherName,
        price,
      },
    });

    //Si el curso fue creado
    if (createdCourse) {
      if (file?.path) {
        const result = await uploadImage(file.path);
        course.image = result.secure_url;
        course.image_public_id = result.public_id;
        fs.unlink(file.path);
        await course.save();
      } else if (image) course.image = image;

      //Agregando sus categorias al curso
      category = category.split(",");
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
      //Falta hacer esto con cloudinary
      if (video) {
        video.map(async (e) => {
          await Video.create({
            ...e,
            courseId: course.id,
          });
        });
      }
    }

    const response = {};
    response.course = course;

    createdCourse
      ? (response.msg = "Curso creado exitosamente.")
      : (response.msg = "Ya existe un curso con ese nombre.");

    return response;
    // } else {
    // return {
    // message:
    // "Alguna de las propiedades de curso es null [name/description/teacher/category]",
    // };
    // }
  } catch (error) {
    return error;
  }
};

module.exports = { createCourse };
