const { User } = require("../../db.js");

const createUser = async ({
  fullName,
  password,
  phoneNumber,
  emailAddress,
  avatar,
}) => {
  try {
    phoneNumber = parseInt(phoneNumber);
    //Create user
    const userDB = await User.create({
        fullName,
        password,
        phoneNumber,
        emailAddress,
        avatar,
    });

    return userDB
      ? "Usuario creado."
      : "Ya existe un usuario con ese nombre.";
  } catch (error) {
    return error;
  }
};

module.exports = { createUser };
