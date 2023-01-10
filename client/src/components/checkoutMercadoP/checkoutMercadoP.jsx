import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";


export default function CheckoutMercadoP({ total, totalprice }) {
  const location = useLocation();
  
  let prod = localStorage.getItem("cart")

  const linkMp = () => {
    axios
      .post("http://localhost:3001/postMercadoPago", {
        prod,
      })
      .then((response) => {
        let linkpago = response;
        console.log(linkpago.data);
        //Se abre en la misma ventana
        window.location.href = linkpago.data;
       
      })
      .catch((error)=>{
        console.log(error);
      })
  };

  return (
    <div>
      <button onClick={() => linkMp()}> MERCADO PAGO </button>
    </div>
  );
}