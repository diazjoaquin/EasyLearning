const {
  Course,
  Category,
  Teacher,
  User,
  Review,
  // Video,
} = require("../../db.js");

const getCourseById = async (id) => {
  try {
    let courseDB = await Course.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Teacher,
          attributes: ["userId"],
        },
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });

    return courseDB;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getCourseById,
};
