const { Course, Category, Review, Video, Comments } = require("../../db.js");

const getAllCourses = async () => {
  try {
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
        },
        {
          model: Video,
          attributes: ["id", "urlVideo", "description", "nameVideo"],
        },
      ],
      order: [[{ model: Video }, "id", "ASC"]],
    });

    coursesDB = coursesDB.map((e) => ({
      id: e.id,
      teacherId: e.teacherId,
      teacherName: e.teacherName,
      name: e.name,
      description: e.description,
      rating: e.rating,
      price: e.price,
      categories: e.categories.map((e) => e.name),
      reviews: e.reviews,
      videos: e.videos,
      image: e.image,
    }));

    return coursesDB.sort((a, b) => a.id - b.id);
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCourses };
