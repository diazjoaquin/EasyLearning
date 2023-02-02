const { Course, Review, User } = require("../../../db.js");

async function getCourseReviews(courseId) {
  let course = await Course.findByPk(courseId);

  if (!course) throw new Error("El curso no existe en la base de datos.");

  // let where = {CourseId};

  const reviewList = await Review.findAll({
    where: { courseId }, //FERMIN ME AYUDO MUCHAS GRACIAS!
    include: [{ model: User, attributes: ["id", "fullName", "emailAddress"] }],
  });
  return reviewList;
}

module.exports = { getCourseReviews };
