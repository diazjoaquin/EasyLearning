const { ReviewPage, User } = require("../../db.js");

const createReviewPage = async (reviewData) => {
  try {
    const { score, title, comments, userId } = reviewData;
    if (!score || !title || !userId || !comments) {
      throw new Error("Falta enviar datos obligatorios de la reseña");
    }
    let [review, boolean] = await ReviewPage.findOrCreate({
      where: {
        userId,
      },
      defaults: {
        score,
        title,
        comments,
        userId,
      },
    });

    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    await review.setUser(user);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createReviewPage };
