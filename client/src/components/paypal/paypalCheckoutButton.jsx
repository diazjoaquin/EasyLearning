import React, { useState, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useAuth } from "../context/Auth-context";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { cleanCart } from "../../redux/actions";

const PaypalCheckoutButton = (props) => {
    const { product } = props;
    const history = useHistory()
    const dispatch = useDispatch()
    const [paidFor, setPaidFor] = useState(false); 
    const [error, setError] = useState(null); 
    const { user } = useAuth();
    const userDB = user && JSON.parse(localStorage.getItem("user"));
   
    const handleApprove = async(data) => {
      if(data.status === "COMPLETED"){
        toast.success("Thank you for your purchase", {
          position: "bottom-left",
        });
        const shopCart = JSON.parse(localStorage.getItem("cart"));
        
        await axios.post("http://localhost:3001/createOrder", {shopCart, userDB});
        console.log("purchase done", data);
        dispatch(cleanCart());
        history.push("/")
      } else {
        alert("Error")
      }
  }

    if (paidFor) {
        // Display success message, modal or redirect user to success page
        alert("Thank you for your purchase!");
    }

    if (error) {
        // Display error message, modal or redirect user to error page
        alert(error);
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
    createOrder = {(data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: product.description,
                    amount: {
                        value: product.price
                    }
                }
            ] 
            
          });
      }
    }

    onApprove= {async (data, actions) => {

      return await actions.order.capture()
      .then(data => handleApprove(data)).catch(error => console.log(error))
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