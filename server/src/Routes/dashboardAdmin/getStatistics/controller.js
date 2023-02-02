const { User, Course, Video } = require("../../../db.js");
const { getAllReviewTotal } = require("../getAllReviewTotal/controller.js");
const { getTeachers } = require("../../teachers/getAllTeachers/controller.js");

const getStatistics = async () => {
  try {
    let data = {};

    let users = await User.findAll();
    users = users?.length;
    if (users) data.users = users;

    let courses = await Course.findAll();
    courses = courses?.length;
    if (courses) data.courses = courses;

    let videos = await Video.findAll();
    videos = videos?.length;
    if (videos) data.videos = videos;

    let teachers = await getTeachers();
    teachers = teachers?.length;
    if (teachers) data.teachers = teachers;

    if (users && teachers) {
      let onlyStudents = users - teachers;
      data.onlyStudents = onlyStudents;
    }

    let reviews = await getAllReviewTotal();

    if (reviews[0]) data.reviewsPage = reviews[0].length;
    if (reviews[1]) data.reviewsCourse = reviews[1].length;
    if (reviews[2]) data.commentsVideo = reviews[2].length;
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getStatistics,
};
