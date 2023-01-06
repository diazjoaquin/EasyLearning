const { User } = require("../../db.js");

const updateUser = async ({ id, fullName, password, phoneNumber, avatar }) => {
  try {
    const user = await User.findOne({
      where: { id },
    });
    if (fullName) user.fullName = fullName;
    if (password) user.password = password;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (avatar) user.avatar = avatar;

    await user.save({
      fields: ["fullName", "password", "phoneNumber", "avatar"],
    });
    await user.reload();

    return user;
  } catch (error) {
    return error;
  }
};

module.exports = { updateUser };
