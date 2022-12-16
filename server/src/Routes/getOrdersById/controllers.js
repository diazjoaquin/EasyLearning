const { Order } = require("../../db.js");

const getOrdersById = async (req,res) => {
  console.log("entro");
  try {
    const {userId} = req.params;
    let orderDB = await Order.findAll({
      where:{
        userId,
      },
      include:[{
        all: true,
      }]
    });

    console.log(orderDB)//; orderDB.sort((a, b) => a.id - b.id);
    res.json(orderDB)
  } catch (error) {
    return error;
  }
};

module.exports = { getOrdersById };
