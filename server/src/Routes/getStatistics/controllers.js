const { User, Course, Video } = require("../../db.js");
const { getTeachers } = require("../getAllTeachers/controllers.js");

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

    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getStatistics,
};
