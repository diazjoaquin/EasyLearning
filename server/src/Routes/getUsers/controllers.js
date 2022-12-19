const { User } = require("../../db.js");

async function getUsers() {
    const userList = await User.findAll();
    return userList;
}

module.exports = { getUsers };