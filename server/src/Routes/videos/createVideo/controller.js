const { Video } = require("../../../db.js");

const createVideo = async ({ urlVideo, description, courseId, nameVideo }) => {
  try {
    const videoDB = await Video.create({
      nameVideo,
      urlVideo,
      description,
      courseId,
    });

    return "Video creado.";
  } catch (error) {
    return error;
  }
};

module.exports = { createVideo };
