const axios = require("axios");
const {Order, Course} = require("../../db")

const createOrder = async(req,res) =>{
    try {

    const {coursesOrder, userId} = req.body //coursesOrders is an array with courses
    // [1,2,3] ---- nro (1)
    const order = await axios({
        method: 'get',
        url: `http://localhost:3001/getOrdersById/${userId}`,
        responseType: 'json'
    })
    console.log("______>",order);
    //Order by user (validation) ==> check
    
    
    //add course to order
      const newOrder = await Order.create({
            coursesOrder,
            userId
        }) 

    res.status(200).json(newOrder)
    } catch (error) {
    res.status(400).json(error)
    }
}

module.exports = { createOrder };