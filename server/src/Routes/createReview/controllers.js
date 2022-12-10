const { Course, Review } = require("../../db.js")

async function createReview (courseId, reviewData) {

    const {score, title, comments} = reviewData; 

    let course = await Course.findByPk(courseId);

    if (!course) throw new Error('El curso no existe en la base de datos.');

    if (!(score && title))
    throw new Error('Falta enviar datos obligatorios de la reseña');

    const newReview = await Review.create({score, title, comments});
    
    await course.addReview(newReview);

    return newReview;
}

module.exports = { createReview };