const {Orderr, User} = require("../../db");
const Sequelize = require("sequelize");
const op = Sequelize.Op;

async function getOrders({userId}) {
    console.log(userId)

    let user = await User.findOne({
        where: { id: userId }, 
        include: [{model: Orderr, attributes: ['id', 'name', 'price']}]
    });

    if (!user) throw new Error('No user in db.');

    return user;
}

module.exports={ getOrders }