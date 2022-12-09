const { Rating } = require("../../db.js");

const createRating = async ({ idUser, idCourse, score }) => {
  try {
    const rating = await Rating.create({
      score,
      userId: idUser,
      courseId: idCourse,
    });

    // const user = await User.findOne({ where: { id: idUser } });

    // await user.setRating(rating);

    return rating;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createRating,
};
