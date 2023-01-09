const { Course } = require("../../db.js");

const deleteVideo = async ({ id }) => {
  try {
    await Course.destroy({
      where: { id },
    });

    return "Course delete.";
  } catch (error) {
    return error;
  }
};

module.exports = { deleteVideo };
