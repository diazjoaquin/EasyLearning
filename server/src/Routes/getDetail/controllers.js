const {
  Course,
  Category,
  User,
  Review,
  Rating,
  Video,
} = require("../../db.js");

const getCourseById = async (id) => {
  try {
    let courseDB = await Course.findOne({
      where: {
        id,
      },
      include: {
        model: Category,
        User,
        Review,
        Rating,
        Video,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    return courseDB;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getCourseById,
};
