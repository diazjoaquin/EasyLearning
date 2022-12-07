require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

//const fs = require('fs');

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
const { Category, Course, Rating, Review, User, Video, Rol } = sequelize.models;

//muchos a muchos
User.belongsToMany(Course, { through: "User_Course", timestamps: false });
Course.belongsToMany(User, { through: "User_Course", timestamps: false });

//muchos a muchos
User.belongsToMany(Rol, { through: "User_Rol", timestamps: false });
Rol.belongsToMany(User, { through: "User_Rol", timestamps: false });

//muchos a muchos
Category.belongsToMany(Course, {
  through: "Category_Course",
  timestamps: false,
});
Course.belongsToMany(Category, {
  through: "Category_Course",
  timestamps: false,
});

User.belongsTo(Review, { through: "User_Review", timestamps: false });

User.belongsTo(Rating, { through: "User_Rating", timestamps: false });

Course.belongsTo(Rating, { through: "Course_Rating", timestamps: false });

Course.belongsTo(Video, { through: "Course_Video", timestamps: false });

Course.belongsTo(Review, { through: "Course_Review", timestamps: false });

Video.belongsTo(Review, { through: "Video_Review", timestamps: false });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
