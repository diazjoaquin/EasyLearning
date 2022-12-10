const { Course, Category, Rating } = require("../../db.js");
const { Op } = require("sequelize");

const updateCourse = async ({ id, name, description, category }) => {
  try {
    let courseDB = await Course.findOne({
      where: { id },
    });

    if (name) courseDB.name = name;
    if (description) courseDB.description = description;

    //Category
    if (category) {
      const [categoryDB, categoryCeated] = await Category.findOrCreate({
        where: { name: category },
        defaults: {
          name: category,
        },
      });

      courseDB.addCategory(categoryDB);
    }

    await courseDB.save({ fields: ["name", "description"] });
    await courseDB.reload();

    // asignacion del rating
    // const ratingDB = await Rating.create({
    //   score,
    // });

    // console.log(ratingDB);
    // await Course.addRating(ratingDB);
    // await Rating.addCourse(courseDB);

    return "Actualizado";
  } catch (error) {
    return error;
  }
};

module.exports = { updateCourse };
