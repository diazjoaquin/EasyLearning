require("dotenv").config();
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
  logging: false,
  native: false,
});

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
const { Category, Course, Review, User, Video, Comments } = sequelize.models;

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

//TABLA REVIEWS
//Course tiene muchos reviews
Course.hasMany(Review);
//Review pertenece a un solo curso
Review.belongsTo(Course);

//TABLA VIDEO
//Course tiene muchos videos
Course.hasMany(Video);
//Video pertenece a un solo curso
Video.belongsTo(Course);

//TABLA COMMENTS
//Video tiene muchos comentarios
Video.hasMany(Comments);
//Comentario perteneca a un solo video
Comments.belongsTo(Video);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
