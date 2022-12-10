const { Router } = require("express");
const router = Router();
const {
  Category,
  Course,
  Review,
  User,
  Video,
  Comments,
} = require("../../db.js");
const { Op } = require("sequelize");

//ruta para mockear toda la data, tiene que ser ejecutada una unica sola vez, sino rompe todo.
router.post("/", async (req, res) => {
  try {
    //Lista de Usuarios
    const listUsers = [
      {
        fullName: "Fermin",
        password: "1234",
        phoneNumber: 12345,
        emailAddress: "Fermin@gmail.com",
        avatar: "urlAvatar",
      },
      {
        fullName: "Joaco",
        password: "1234",
        phoneNumber: 12345,
        emailAddress: "Joaco@gmail.com",
        avatar: "urlAvatar",
      },
      {
        fullName: "Santi",
        password: "1234",
        phoneNumber: 12345,
        emailAddress: "Santi@gmail.com",
        avatar: "urlAvatar",
      },
      {
        fullName: "Franco",
        password: "1234",
        phoneNumber: 12345,
        emailAddress: "Franco@gmail.com",
        avatar: "urlAvatar",
      },
      {
        fullName: "Benja",
        password: "1234",
        phoneNumber: 12345,
        emailAddress: "Benja@gmail.com",
        avatar: "urlAvatar",
      },
    ];

    //Lista de Categorias
    const listCategories = [
      {
        name: "programmin",
      },
      {
        name: "kitchen",
      },
      {
        name: "futbol",
      },
      {
        name: "diseño",
      },
      {
        name: "Marketing",
      },
    ];

    //Lista de Cursos
    const listCourses = [
      {
        name: "Curso de Fermin",
        description: "nada de description",
        category: 1,
        teacher: "Fermin", //Desde el front llegaria como id y tenemos que enviarlo a la base de datos como nombre.
        price: 100,
      },
      {
        name: "Curso de Joaco",
        description: "nada de description",
        category: 2,
        teacher: "Joaco", //Desde el front llegaria como id y tenemos que enviarlo a la base de datos como nombre.
        price: 200,
      },
      {
        name: "Curso de Santi",
        description: "nada de description",
        category: 3,
        teacher: "Santi", //Desde el front llegaria como id y tenemos que enviarlo a la base de datos como nombre.
        price: 500,
      },
      {
        name: "Curso de Franco",
        description: "nada de description",
        category: 4,
        teacher: "Franco", //Desde el front llegaria como id y tenemos que enviarlo a la base de datos como nombre.
        price: 900,
      },
      {
        name: "Curso de Benja",
        description: "nada de description",
        category: 5,
        teacher: "Benja", //Desde el front llegaria como id y tenemos que enviarlo a la base de datos como nombre.
        price: 1900,
      },
    ];

    //Lista de Videos
    const listVideos = [
      {
        urlVideo: "www.youtube.com (video1)",
        description: "description video",
        courseId: 1,
      },
      {
        urlVideo: "www.youtube.com (video2)",
        description: "description video",
        courseId: 1,
      },
      {
        urlVideo: "www.youtube.com (video3)",
        description: "description video",
        courseId: 1,
      },
      {
        urlVideo: "www.youtube.com (video4)",
        description: "description video",
        courseId: 1,
      },
      {
        urlVideo: "www.youtube.com (video5)",
        description: "description video",
        courseId: 1,
      },
      {
        urlVideo: "www.youtube.com (video1)",
        description: "description video",
        courseId: 2,
      },
      {
        urlVideo: "www.youtube.com (video2)",
        description: "description video",
        courseId: 2,
      },
      {
        urlVideo: "www.youtube.com (video3)",
        description: "description video",
        courseId: 2,
      },
      {
        urlVideo: "www.youtube.com (video4)",
        description: "description video",
        courseId: 2,
      },
      {
        urlVideo: "www.youtube.com (video5)",
        description: "description video",
        courseId: 2,
      },
      {
        urlVideo: "www.youtube.com (video1)",
        description: "description video",
        courseId: 3,
      },
      {
        urlVideo: "www.youtube.com (video2)",
        description: "description video",
        courseId: 3,
      },
      {
        urlVideo: "www.youtube.com (video3)",
        description: "description video",
        courseId: 3,
      },
      {
        urlVideo: "www.youtube.com (video4)",
        description: "description video",
        courseId: 3,
      },
      {
        urlVideo: "www.youtube.com (video5)",
        description: "description video",
        courseId: 3,
      },
      {
        urlVideo: "www.youtube.com (video1)",
        description: "description video",
        courseId: 4,
      },
      {
        urlVideo: "www.youtube.com (video2)",
        description: "description video",
        courseId: 4,
      },
      {
        urlVideo: "www.youtube.com (video3)",
        description: "description video",
        courseId: 4,
      },
      {
        urlVideo: "www.youtube.com (video4)",
        description: "description video",
        courseId: 4,
      },
      {
        urlVideo: "www.youtube.com (video5)",
        description: "description video",
        courseId: 4,
      },
      {
        urlVideo: "www.youtube.com (video1)",
        description: "description video",
        courseId: 5,
      },
      {
        urlVideo: "www.youtube.com (video2)",
        description: "description video",
        courseId: 5,
      },
      {
        urlVideo: "www.youtube.com (video3)",
        description: "description video",
        courseId: 5,
      },
      {
        urlVideo: "www.youtube.com (video4)",
        description: "description video",
        courseId: 5,
      },
      {
        urlVideo: "www.youtube.com (video5)",
        description: "description video",
        courseId: 5,
      },
    ];

    //Lista de Comentarios_Videos
    const listCommentVideos = [
      {
        videoId: 1,
        userId: 1,
        title: "Titulo video",
        description: "Este video esta muy bueno.",
      },
      {
        videoId: 2,
        userId: 2,
        title: "Titulo video",
        description: "Este video esta muy bueno.",
      },
      {
        videoId: 3,
        userId: 3,
        title: "Titulo video",
        description: "Este video esta muy bueno.",
      },
      {
        videoId: 4,
        userId: 4,
        title: "Titulo video",
        description: "Este video esta muy bueno.",
      },
      {
        videoId: 5,
        userId: 5,
        title: "Titulo video",
        description: "Este video esta muy bueno.",
      },
    ];

    //Lista de Reviews Course
    const listReviewsCourses = [
      {
        userId: 1,
        courseId: 1,
        score: 5,
        title: "Title review course",
        comments: "Comment review course",
      },
      {
        userId: 2,
        courseId: 1,
        score: 3,
        title: "Title review course",
        comments: "Comment review course",
      },
      {
        userId: 1,
        courseId: 2,
        score: 5,
        title: "Title review course",
        comments: "Comment review course",
      },
      {
        userId: 2,
        courseId: 2,
        score: 3,
        title: "Title review course",
        comments: "Comment review course",
      },
      {
        userId: 1,
        courseId: 3,
        score: 5,
        title: "Title review course",
        comments: "Comment review course",
      },
      {
        userId: 2,
        courseId: 3,
        score: 3,
        title: "Title review course",
        comments: "Comment review course",
      },
      {
        userId: 1,
        courseId: 4,
        score: 5,
        title: "Title review course",
        comments: "Comment review course",
      },
      {
        userId: 2,
        courseId: 4,
        score: 3,
        title: "Title review course",
        comments: "Comment review course",
      },
      {
        userId: 1,
        courseId: 5,
        score: 5,
        title: "Title review course",
        comments: "Comment review course",
      },
      {
        userId: 2,
        courseId: 5,
        score: 3,
        title: "Title review course",
        comments: "Comment review course",
      },
    ];

    //Create Users
    const listUsersDB = await User.bulkCreate(listUsers);

    //Create Courses
    const listCoursesDB = await Course.bulkCreate(listCourses);

    //Create Categories
    const listCategoriesDB = await Category.bulkCreate(listCategories);
    await listCoursesDB[0].addCategory(listCategoriesDB[0]);
    await listCoursesDB[0].addCategory(listCategoriesDB[4]);
    await listCoursesDB[1].addCategory(listCategoriesDB[1]);
    await listCoursesDB[2].addCategory(listCategoriesDB[2]);
    await listCoursesDB[2].addCategory(listCategoriesDB[3]);
    await listCoursesDB[2].addCategory(listCategoriesDB[4]);
    await listCoursesDB[3].addCategory(listCategoriesDB[3]);
    await listCoursesDB[4].addCategory(listCategoriesDB[4]);

    //Create Videos
    const listVideosDB = await Video.bulkCreate(listVideos);

    //Create Comments Videos
    const listCommentVideosDB = await Comments.bulkCreate(listCommentVideos);

    //Create Reviews Course
    const listReviewsCoursesDB = await Review.bulkCreate(listReviewsCourses);

    res.json(listCoursesDB);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
