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
          through: {
            attributes: [],
          },
        },
        {
          model: Review,
          attributes: ["id", "title", "comments", "score", "userId"],
          // include: {
          //   model: User,
          //   attributes: ["fullName"],
          // },
        },
        {
          model: Video,
          attributes: ["id", "urlVideo", "description"],
        },
      ],
      order: [[{ model: Video }, "id", "ASC"]],
    });

    coursesDB = coursesDB.map((e) => ({
      id: e.id,
      teacher: e.teacher,
      name: e.name,
      description: e.description,
      rating: e.rating,
      price: e.price,
      categories: e.categories.map((e) => e.name),
      reviews: e.reviews,
      videos: e.videos,
    }));

    return coursesDB.sort((a, b) => a.id - b.id);
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCourses };
