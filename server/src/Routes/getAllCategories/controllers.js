// const { Category } = require("../../db.js");
const axios = require("axios");

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
    let categories = await axios.get(
      `https://categories-api-850bf-default-rtdb.firebaseio.com/categories.json`
    );
    return categories.data;
  } catch (error) {
    return error;
  }
};

module.exports = { getCategories };
