const { Comments } = require("../../db.js");

const createCommentVideo = async ({ videoId, userId, title, description }) => {
  try {
    if (videoId && userId && title && description) {
      //Antes de crear el comentario, tengo que buscar en la tabla de comentarios si ese usuario no hizo ya un comentario respecto el curso.
      //Un usuario va a poder realizar un comentario por curso.
      const [comment, createdComment] = await Comments.findOrCreate({
        where: { userId, videoId },
        defaults: {
          videoId,
          userId,
          title,
          description,
        },
      });

      //si el usuario ya comento ese video
      if (!createdComment) {
        return "[ERROR]: El usuario no puede comentar mas de una vez el mismo video.";
      }

      //Faltaria retornar que el usuario realizo el comentario correctamente.
      return comment;
    } else {
      return "Alguna de las propiedades [videoId/userId/title/description] es null.";
    }
  } catch (error) {
    return error;
  }
};

module.exports = { createCommentVideo };
