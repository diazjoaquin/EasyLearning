const { ReviewPage, User } = require("../../db.js");

const getAllReviewPage = async () => {
  const allReviews = await ReviewPage.findAll({
    include: [{ model: User, attributes: ["id", "fullName", "emailAddress"] }],
  });
  return allReviews;
};

module.exports = { getAllReviewPage };
