const { Orderr, User, Course } = require("../../db");

const createOrder = async ({ prodd, userDB }) => {
  try {
    const user = await User.findByPk(userDB.id);
    const orders = await Orderr.bulkCreate(prodd);

    prodd.map(async (e) => {
      const course = await Course.findOne({ where: { id: e.identificador } });
      course.students =
        !course.students?.includes(user.dataValues.id) &&
        [].concat(course.students).concat(user.dataValues.id);

      await course.save();
      await course.reload();
    });

    await orders.map(async (e) => {
      await e.addUser(user);
    });

    return "asd";
  } catch (error) {
    return error;
  }
};

module.exports = { createOrder };
