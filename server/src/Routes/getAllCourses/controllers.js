// const axios = require("axios");
const { Course, Category, Review, Video, Comments } = require("../../db.js");

const getAllCourses = async () => {
  try {
    // let courses = await axios.get(
    //   `https://e-learning-40b30-default-rtdb.firebaseio.com/courses.json`
    // );
    // courses = courses.data;

    // await Course.bulkCreate(courses);
    let coursesDB = await Course.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
        {
          model: Review,
          attributes: ["id", "title", "comments", "score"],
        },
        {
          model: Video,
          attributes: ["id", "urlVideo", "description"],
          include: {
            model: Comments,
          },
        },
      ],
      order: [[{ model: Video }, "id", "ASC"]],
    });

    return coursesDB.sort((a, b) => a.id - b.id);
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCourses };
