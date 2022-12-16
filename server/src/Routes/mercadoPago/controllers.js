const Course = require("../../Models/Course")
const {mercadopago} = require("../../utils/mercadoPago")
const User = require("../../Models/User")
//const getCourseById = require("../getDetail/controllers")


const consultProduct = async(req,res)=>{
    try {
        const {courseId} = req.params;
        const course = await axios({
            method: 'get',
            url: `http://localhost:3001/getDetail/id=${courseId}`,
            responseType: 'json'
        })
        return course
    } catch (error) {
        console.log(error);
    }
}

const payCourse = async(req,res)=>{
    const prod = consultProduct()
    let preference = {
        items: [
          {
            name: prod.name,
            unit_price: prod.price,
            quantity: 1,
          },
        ],
        back_urls: {
			"success": "http://localhost:3001/feedback",
			"failure": "http://localhost:3001/feedback",
			"pending": "http://localhost:3001/feedback"
		},
		auto_return: "approved",
      };
      
      mercadopago.preferences
        .create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id
            })
        })
        .catch(function (error) {
          console.log(error); //check
        });
}

const getFeedback = (req,res)=>{
    res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
}