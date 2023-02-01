const { ReviewPage, User, Review, Comments } = require("../../../db.js");

const getAllReviewTotal = async () => {
  const allReviews = await ReviewPage.findAll({
    include: [
      { model: User, attributes: ["id", "fullName", "emailAddress", "avatar"] },
    ],
  });
  const allReviewsCourses = await Review.findAll({
    include: [
      { model: User, attributes: ["id", "fullName", "emailAddress", "avatar"] },
    ],
  });
  const allCommentsVideo = await Comments.findAll({
    model: Comments,
    // include: [{model: User, attributes: ["avatar"]}]
  });

  return [allReviews, allReviewsCourses, allCommentsVideo];
};

module.exports = { getAllReviewTotal };
