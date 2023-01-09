const { Router } = require("express");
const router = Router();
require("dotenv").config();
const axios = require('axios');
const { PAYPAL_API, PAYPAL_API_SECRET, PAYPAL_API_CLIENT } = process.env;


const createOrder = async (req, res) => {
    // let allProducts = [];

    // req.body.forEach(e => {
    //     let obj = {
    //         "name": e.name,
    //         "unit_amount": {
    //             "currency_code": "USD",
    //             "value": e.price
    //         }
    //     }
    //     allProducts.push(obj)
    // });

    // let totalAmount = 0

    // allProducts.forEach(e => {
    //     totalAmount = totalAmount + e.price
    // })

    try{
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    // "items": allProducts,
                    amount: {
                        currency_code: "USD",
                        value: "700",
                        breakdown: {
                            item_total: {
                                currency_code: "USD",
                                value: "700"
                            }
                        }
                    }
                }
            ],
            application_context: {
                brand_name: "Elearning.com",
                landing_page: "LOGIN",
                user_action: "PAY_NOW",
                return_url: "http://localhost:3001/capture-order",
                cancel_url: "http://localhost:3001/cancel-order"
            }
        };

        const params = new URLSearchParams()
        params.append('grant_type', 'client_credentials')

        const { data: { access_token } } = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET
            }
        });
        const info = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        
        console.log(info.data);

        res.json(info.data);
       } catch(error) {
        // return res.status(500).send("Something went wrong")
         console.log(error.message)
       }
    }        

    const captureOrder = async (req, res) => {
        const { token } = req.query
    
        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
            auth: {
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET
            }
        })
    
        console.log(response.data)
        res.send('Capture Order')
    };


const cancelOrder = (req, res) => {
    res.redirect("/");
};

const orderDetails = (req, res) => {

}; 

module.exports = {
    createOrder,
    captureOrder,
    cancelOrder,
    orderDetails
}

