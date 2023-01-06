const { getAllCourses } = require("../getAllCourses/controllers.js");

const getTeachers = async () => {
  try {
    const arrTeachers = [];
    let teachers = await getAllCourses();
    teachers?.map((e) =>
      arrTeachers.includes(e.teacherName)
        ? undefined
        : arrTeachers.push(e.teacherName)
    );

    return arrTeachers;
  } catch (error) {
    return error;
  }
};

module.exports = { getTeachers };
