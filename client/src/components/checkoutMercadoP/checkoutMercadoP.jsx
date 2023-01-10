import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/Auth-context";

export default function CheckoutMercadoP({ total, totalprice }) {
  const location = useLocation();
  
  const { user } = useAuth();
  const userDB = user && JSON.parse(localStorage.getItem("user"));

  let prod = localStorage.getItem("cart")

  const linkOrder = () =>{
    axios.post("http://localhost:3001/createOrder", {
      prod,
      userDB
    })
  }
  
  const linkMp = () => {
    axios
      .post("http://localhost:3001/postMercadoPago", {
        prod,
      })
      .then((response) => {
        let linkpago = response;
        //console.log("Este es el link de pago",linkpago.data);
        //Se abre en la misma ventana
        window.location.href = linkpago.data;
        linkOrder()
      })
      .catch((error)=>{
        console.log(error);
      })
  };

  return (
    <div>
      <button onClick={() => linkMp()}> -MERCADO PAGO- </button>
    </div>
  );
}