import React from "react";
import PaypalCheckoutButton from "./paypalCheckoutButton";

const Checkout = () => {
    //en el componente carrito. 
    //orden de compra 
    const product = {
        description: "Crush Course AWS by Bianca",
        price: 2000
    };

    return (
        <div className="paypal-button-container">
        <PaypalCheckoutButton product={product} />
      </div>
    )
};

export default Checkout; 