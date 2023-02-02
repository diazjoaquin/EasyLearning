const { getAllCourses } = require("../getAllCourses/controller");

const getByName = async (name) => {
  try {
    const allCourses = await getAllCourses();
    const searchName = allCourses.filter((course) =>
      course.name.toLowerCase().includes(name.toLowerCase())
    );
    if (searchName.length > 0) {
      return searchName;
    } else {
      return { msg: "Course not found" };
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getByName };
