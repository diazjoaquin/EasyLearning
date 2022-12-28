import React, {useEffect}from "react";
import PaypalCheckoutButton from "./paypalCheckoutButton";

const Checkout = ({totalCartPrice, description}) => {
    //en el componente carrito. 
    //orden de compra 
    const product = {
        description: description,
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