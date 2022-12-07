const { Course } = require("../../db.js");

const createCourse = async (req, res) => {
  const { name, category, description, rating, video } = req.body;
  try {
    const newCourse = await Course.create({
      name,
      description,
    });
    //crear en la base de datos category, rating y video. findOrCreate
    //agregar teacher
    // await newCourse.addCategory(categoryDb);
    // await newCourse.addVideo(videoDb);
    // await newCourse.addRating(ratingDb);

    res.status(201).json(newCourse).send({ msg: "Course created" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = createCourse;
