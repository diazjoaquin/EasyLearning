const { getAllCourses } = require("../getAllCourses/controllers.js");

const getTeachers = async () => {
  try {
    let teachers = await getAllCourses();
    console.log(teachers);
    teachers = teachers?.map((e) => e.teacher);
    return teachers;
  } catch (error) {
    return error;
  }
};

module.exports = { getTeachers };
