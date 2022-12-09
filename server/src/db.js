require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/elearning`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/Models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/Models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Category, Course, Rating, Review, User, Video, Teacher, Comments } =
  sequelize.models;

//Fermin
//muchos a muchos
User.belongsToMany(Course, { through: "User_Course", timestamps: false });
Course.belongsToMany(User, { through: "User_Course", timestamps: false });

//muchos a muchos
Category.belongsToMany(Course, {
  through: "Category_Course",
  timestamps: false,
});
Course.belongsToMany(Category, {
  through: "Category_Course",
  timestamps: false,
});

//TABLA RATING
//Agrega en la tabla ratings una clave foranea CourseId
Rating.belongsTo(Course);
//Agrega en la tabla ratings una clave foranea RatingId
User.hasMany(Rating);

//TABLA TEACHERS
//Agregan en la tabla teachers, una clave foranea CourseId y UserId
Course.hasOne(Teacher);
User.hasOne(Teacher);

//TABLA COMMENTS
// Video.hasMany(Comments);

//TABLA VIDEO
Course.hasMany(Video);
Video.hasMany(Comments);
// Comments.hasMany(Video);

//Bianca
// //muchos a muchos
// User.belongsToMany(Course, { through: "User_Course", timestamps: false });
// Course.belongsToMany(User, { through: "User_Course", timestamps: false });

// //muchos a muchos
// Category.belongsToMany(Course, {
//   through: "Category_Course",
//   timestamps: false,
// });
// Course.belongsToMany(Category, {
//   through: "Category_Course",
//   timestamps: false,
// });

// //A.belongsTo(B) One-To-One relationship with the foreign key being defined in the source model (A).
// //A.hasOne(B) association means that a One-To-One relationship exists between A and B,
// //with the foreign key being defined in the target model (B).

// //For consistency, the ON DELETE RESTRICT can be translated to the (less aggresive) You Can't Kill Parents!
// // Only childless rows can be killed (deleted.)

// User.hasMany(Review, { onDelete: "RESTRICT" });
// Review.belongsTo(User);

// // User.belongsTo(Review, { through: "User_Review", timestamps: false });

// User.hasOne(Rating, { onDelete: "RESTRICT" });
// Rating.belongsTo(User);

// // User.belongsTo(Rating, { through: "User_Rating", timestamps: false });

// Course.hasMany(Rating, { onDelete: "RESTRICT" });
// Rating.belongsTo(Course);

// // Course.belongsTo(Rating, { through: "Course_Rating", timestamps: false });

// Course.hasMany(Video);
// Video.belongsTo(Course);

// // Course.belongsTo(Video, { through: "Course_Video", timestamps: false });

// Course.hasMany(Review, { onDelete: "RESTRICT" });
// Review.belongsTo(Course);

// // Course.belongsTo(Review, { through: "Course_Review", timestamps: false });
// // Video.belongsTo(Review, { through: "Video_Review", timestamps: false });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
