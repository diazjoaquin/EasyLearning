const { Op } = require("sequelize");
const { Course, Review } = require("../../db.js");

async function createReview(courseId, reviewData) {
  try {
    const { score, title, comments, userId } = reviewData;
    let course = await Course.findOne({
      where: { id: courseId },
    });

    if (!course) throw new Error("El curso no existe en la base de datos.");

    if (!(score && title && userId))
      throw new Error("Falta enviar datos obligatorios de la reseña");

    const [newReview, createNewReview] = await Review.findOrCreate({
      where: {
        [Op.and]: [{ userId }, { courseId }],
      },
      defaults: {
        score,
        title,
        comments,
        userId,
      },
    });
    console.log(createNewReview, newReview);
    await course.addReview(newReview);

    const listReviewsCourse = await Review.findAll({
      where: { courseId },
    });

    //Calculacion de promedio del raiting del curso
    let prueba = listReviewsCourse.map((e) => e.dataValues.score);
    let cant = prueba.length;
    let promedio = prueba.reduce((acc, current) => {
      return acc + current;
    }, 0);
    promedio = (promedio / cant).toFixed(1);
    promedio = JSON.parse(promedio);
    course.rating = promedio;
    await course.save({ fields: ["rating"] });
    await course.reload();

    return course;
  } catch (error) {
    return error;
  }
}

module.exports = { createReview };
