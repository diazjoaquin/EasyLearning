// const { Category } = require("../../db.js");

// const getCategories = async () => {
//   try {
//     let result = await Category.findAll();
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

// module.exports = { getCategories };

const { Category } = require("../../db.js");

const getCategories = async () => {
  try {
    let categoriesDB = await Category.findAll();
    categoriesDB = categoriesDB.map((e) => e.name);
    return categoriesDB;
  } catch (error) {
    return error;
  }
};

module.exports = { getCategories };
