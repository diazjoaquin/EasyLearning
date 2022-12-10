const { Course, Category, Video, Review } = require("../../db.js");

const getCourseById = async (id) => {
  try {
    let courseDB = await Course.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
        {
          model: Review,
          attributes: ["id", "title", "comments", "score"],
        },
        {
          model: Video,
          attributes: ["id", "urlVideo", "description"],
        },
      ],
      order: [[{ model: Video }, "id", "ASC"]],
    });

    return courseDB;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getCourseById,
};
