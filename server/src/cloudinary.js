// const cloudinary = require("cloudinary").v2;
// require("dotenv").config();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
//   secure: true,
// });

// async function uploadImage(filePath) {
//   return await cloudinary.uploader.upload(filePath, {
//     folder: "elearning",
//   });
// }

// async function deleteImage(publicId) {
//   return await cloudinary.uploader.destroy(publicId);
// }

// module.exports = { uploadImage, deleteImage };
