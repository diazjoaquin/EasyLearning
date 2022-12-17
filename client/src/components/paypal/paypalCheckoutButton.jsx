import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

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
        }}
    onApprove= {async(data, actions) => {
        const order = await actions.order.capture();

        handleApprove(data.orderID);
    }}
    onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}
    />
);
};

export default PaypalCheckoutButton;