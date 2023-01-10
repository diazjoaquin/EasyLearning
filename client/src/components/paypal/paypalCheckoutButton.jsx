import React, { useState, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { cleanCart } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/Auth-context";
import { auth } from "../../firebase-config";
import axios from "axios";

const PaypalCheckoutButton = (props) => {
    const { product } = props;

    const [paidFor, setPaidFor] = useState(false); 
    const [error, setError] = useState(null); 
    const handleApprove = (orderId) => {
        //call backend function to fulfill order

        //if response is success 
        setPaidFor(true);

    //refresh user's account 
    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us for assistance.");
    };

    console.log(userDB)
    let allProducts = [];
    cart.forEach( e=> {
      let obj = {
        name: e.name,
            unit_amount: {
                currency_code: "USD",
                value: e.price
            },
            quantity: "1"
        }
        allProducts.push(obj)
    });


    const handleApprove = (data) => {
        if(data.status === "COMPLETED"){
          toast.success("Thank you for your purchase", {
            position: "bottom-left",
          });
          // const shopCart = JSON.parse(localStorage.getItem("cart"));
          // console.log(shopCart)
          // await axios.post("/createOrder", {data, userDB});
          console.log("purchase done", data);
          dispatch(cleanCart());
          history.push("/")
        } else {
          alert("Error")
        }
    } 
      
    return (
    <PayPalButtons
    style={{
        color: "silver",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill"
      }}
      
    onClick={(data, actions) => {
        // Validate on button click, client or server side
        const hasAlreadyBoughtCourse = false;
      
        if (hasAlreadyBoughtCourse) {
          setError(
            "You already bought this course. Go to your account to view your list of courses."
          );
      
          return actions.reject();
        } else {
          
          return actions.resolve();
        }
      }}

   
    createOrder = { async (data, actions) => {
        return await actions.order.create({
            purchase_units: [
            {
                    items: allProducts,
                    intent: "CAPTURE",
                    description: "Courses",
                    amount: {
                        value: product.price,
                        breakdown: {
                          item_total: {  /* Required when including the items array */
                          currency_code: "USD",
                          value: product.price
                        }
                      }
                    },
                    custom_id: userDB.fullName
              }],
          })
          .then((orderID) => {
            setOrderID(orderID);
            console.log(orderID);
            return orderID;
          })
      }
    }

    onApprove= {async(data, actions) => {
        const order = await actions.order.capture();
        
        console.log(order);

        handleApprove(data.orderID);
    }}

    onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}

    forceReRender={[product.price]}
    />
); 

};

export default PaypalCheckoutButton;