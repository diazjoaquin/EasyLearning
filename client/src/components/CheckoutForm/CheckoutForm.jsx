import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../redux/actions";
//Faltaria actions y reducer de "getOrders"
//Deberiamos poder actualizar las ordenes
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

const CheckoutForm = () =>{

    const history = useHistory()
    const dispatch = useDispatch()
    const userId = useSelector((state) => id/* i need userID. Bring with login */)
    useEffect(()=>{
        dispatch(getOrders())
    }, [] )
    const orders = useSelector((state) => state.allOrders)
    const productsCart = useSelector((state) => state.cart)
    
    //select order by userID
    const userOrders = orders.filter(
        (item) => item.userId === userId
    )

    //ver estado de order???
    return(
        <>
        <button onClick={() => history.push("/cart")}> Para regresar al carrito </button>
        <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' />
            <FormHelperText>We'll never share your data</FormHelperText>
        </FormControl>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your data</FormHelperText>
        </FormControl>
        <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input type='number' />
            <FormHelperText>We'll never share your data</FormHelperText>
        </FormControl>
        </>
    )
}

export default CheckoutForm;