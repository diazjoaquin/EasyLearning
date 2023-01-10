const { encrypt } = require("../../Helper/handleBcrypt")
const { User } = require("../../db.js");

const createUser = async ({
  fullName,
  password,
  phoneNumber,
  emailAddress,
  avatar,
}) => {
  try {
    const passwordHash = await encrypt(password)
    //Create user
    const [userDB, createdUserDB] = await User.findOrCreate({
      where: { emailAddress },
      defaults: {
        fullName,
        password: passwordHash,
        phoneNumber: parseInt(phoneNumber),
        emailAddress,
        avatar,
      },
    });

    return createdUserDB
      ? "Usuario creado."
      : "Ya existe un usuario con ese email.";
  } catch (error) {
    return error;
  }
};

module.exports = { createUser };
