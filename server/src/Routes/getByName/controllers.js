const { getAllCourses } = require("../getAllCourses/controllers");

const getByName = async (req, res) => {
  const { name } = req.query;
  try {
    const allCourses = await getAllCourses();
    if (name) {
      const searchName = allCourses.filter((course) =>
        course.name.toLowerCase().includes(name.toLowerCase())
      );
      searchName.length > 0
        ? res.status(200).json(searchName)
        : res.status(404).send({ msg: "Course not found" });
    } else {
      res.status(200).json(allCourses);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = getByName;
