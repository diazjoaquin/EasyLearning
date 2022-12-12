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
    return await Category.findAll();
  } catch (error) {
    return error;
  }
};

module.exports = { getCategories };
