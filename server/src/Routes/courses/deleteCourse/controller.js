const { Course } = require("../../../db.js");

const deleteCourse = async ({ id }) => {
  try {
    await Course.destroy({
      where: { id },
    });

    return "Course delete.";
  } catch (error) {
    return error;
  }
};

module.exports = { deleteCourse };
