const { Video } = require('../../db.js');

const createVideo = async ({
    urlVideo, 
    description,
    courseId,
}) => {
   try {
    const [videoDB, createdVideoDB] = await Video.findOrCreate({ 
        where: { urlVideo }, 
        defaults: { 
            urlVideo,  
            description, 
            courseId,
        },
    });
    

    return createdVideoDB
        ? "Video creado."
        : "Ya existe un video con esa url.";
  } catch (error) {
    return error;
  }
};

module.exports = { createVideo
};


