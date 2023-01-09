import React, {useEffect}from "react";
import PaypalCheckoutButton from "./paypalCheckoutButton";

const Checkout = ({totalCartPrice, items}) => {
   
    const product = {
        price: totalCartPrice,
    };

    return (
        <div className="paypal-button-container">
        <PaypalCheckoutButton 
        product={product}
        />
      </div>
    )
};

export default Checkout; 