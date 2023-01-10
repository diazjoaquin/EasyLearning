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


  const history = useHistory();

  const dispatch = useDispatch();

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [orderID, setOrderID] = useState(false);
  const [success, setSuccess] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { user } = useAuth();
  const userDB = user && JSON.parse(localStorage.getItem("user"));

  let allProducts = [];
  cart.forEach(e => {
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


  let shopCart = JSON.parse(localStorage.getItem("cart"));
  shopCart = shopCart?.map(e => {
    return {
      name: e.name,
      price: e.price
    }
  })
  const handleApprove = async (data) => {
    if (data.status === "COMPLETED") {
      toast.success("Thank you for your purchase", {
        position: "bottom-left",
      });
      let response = await axios.post("/createOrder", { prodd: shopCart, userDB });
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
        if (!user) {
          toast.success("Please login first!", {
            position: "bottom-left",
          });
          return actions.reject();
        } else {
          return actions.resolve();
        }
      }}


      createOrder={async (data, actions) => {
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
            return orderID;
          })
      }
      }
      onApprove={async (data, actions) => {

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