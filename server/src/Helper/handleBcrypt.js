const bcrypt = require("bcryptjs")

const encrypt = async (textplain) => {
    const hash = await bcrypt.hash(textplain, 10)
    return hash
}

module.exports = { encrypt }