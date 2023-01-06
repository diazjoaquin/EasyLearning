const { Course } = require("../../db.js");

const deleteVideo = async ({ id }) => {
  try {
    await Course.destroy({
      where: { id },
    });

    return "Video delete.";
  } catch (error) {
    return error;
  }
};

module.exports = { deleteVideo };
