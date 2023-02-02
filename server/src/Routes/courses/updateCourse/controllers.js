const {
  Course,
  Category,
  Rating,
  Video,
  Category_Course,
} = require("../../../db.js");
const { Op } = require("sequelize");

const updateCourse = async ({
  id,
  name,
  description,
  students,
  price,
  image,
  image_public_id,
  category,
  archieved,
  status,
  videos,
  categories,
}) => {
  // id  :   9
  // name  :   "curso de pepito"
  // description  :   "pepito description"
  // students  :   null
  // price  :   900
  // image  :   "https://res.cloudinary.com/dy0r9xqqv/image/upload/v1672960416/elearning/y4yedzarye5uwzzmt8ym.jpg"
  // image_public_id  :   "elearning/y4yedzarye5uwzzmt8ym"
  // archieved  :   true
  // status  :   "PENDING"
  // videos  :   (2) [{…}, {…}]

  // categories  :   (3) [{…}, {…}, {…}]

  try {
    let courseDB = await Course.findOne({
      where: { id },
    });

    if (name) courseDB.name = name;
    if (description) courseDB.description = description;
    if (students) courseDB.students = students;
    if (price) courseDB.price = price;
    if (image) courseDB.image = image;
    if (image_public_id) courseDB.image_public_id = image_public_id;
    if (archieved !== undefined) courseDB.archieved = archieved;
    if (status !== undefined) courseDB.status = status;

    //Category
    //RESPECTO A CATEGORIA, FALTARIA HACER LA LOGICA SI LA PERSONA LE QUIERE ELIMINAR UNA CATEGORIA AL CURSO
    //LA LOGICA DEL IF DE ABAJIO, ES SOLAMENTE POR SI LA PERDONA LE QUIERE AGREGAR UNA CATEGORIA.
    if (categories?.length) {
      await Category_Course.destroy({
        where: { courseId: id },
      });

      categories.map(async (e) => {
        const categoryDB = await Category.findOne({
          where: { name: e.name },
        });

        await courseDB.addCategory(categoryDB);
      });
    }

    if (videos?.length) {
      await Video.destroy({
        where: { courseId: id },
      });

      videos.map((e) =>
        Video.create({
          nameVideo: e.nameVideo,
          description: e.description,
          urlVideo: e.urlVideo,
          courseId: id,
        })
      );
    }

    await courseDB.save();
    await courseDB.reload();
    return courseDB;
    return "Actualizado";
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { updateCourse };
