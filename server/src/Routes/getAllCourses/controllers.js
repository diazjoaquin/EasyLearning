const axios = require("axios");
const { Course, Category } = require("../../db.js");

const getAllCourses = async () => {
  try {
    let courses = await axios.get(
      `https://e-learning-40b30-default-rtdb.firebaseio.com/courses.json`
    );
    courses = courses.data;

    await Course.bulkCreate(courses);
    let coursesDB = await Course.findAll({
      include: {
        model: Category,
        attributes: ["name"],
      },
    });

    return coursesDB;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCourses };
