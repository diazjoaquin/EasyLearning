const { Course, Category, User, Review, Rating, Video } = require("../db.js");

const getCourseById = async (id) => {
  let course = await Course.findOne({
    where: {
      id: id,
    },
    include: Category,
    User,
    Review,
    Rating,
    Video,
  });

  return course;
};
