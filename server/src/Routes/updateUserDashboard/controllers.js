const { User } = require("../../db.js");

const updateUserDashboard = async ({ array, status, admin }) => {
  try {
    if (array.length) {
      array.map(async (e) => {
        const user = await User.findOne({
          where: { id: e.id },
        });
        if (status) user.status = status;
        if (admin !== undefined) user.admin = admin;
        await user.save();
        await user.reload();
      });
    }
    return "actualizados";
  } catch (error) {
    return error;
  }
};

module.exports = { updateUserDashboard };
