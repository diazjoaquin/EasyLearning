const { getAllCourses } = require("../../courses/getAllCourses/controller");

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
