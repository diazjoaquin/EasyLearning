const { ReviewPage, User, Review, Comments } = require("../../db.js");


const getAllReviewTotal = async () => {
  const allReviews = await ReviewPage.findAll({
    include: [{ model: User, attributes: ["id", "fullName", "emailAddress"] }],
  });
  const allReviewsCourses = await Review.findAll({
        include: [{ model: User, attributes: ["id", "fullName", "emailAddress"] }],
    });
    const allCommentsVideo = await Comments.findAll({
          model: Comments 
    })
  return [allReviews, allReviewsCourses, allCommentsVideo];
};
  
  


  module.exports = { getAllReviewTotal };