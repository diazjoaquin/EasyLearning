import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/actions";
import { Grid, GridItem } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/react';
import { VStack, StackDivider, Text } from '@chakra-ui/react';
import Checkout from "../paypal/checkout";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import { Divider } from '@chakra-ui/react';
import { toast } from "react-toastify";



const Cart = () => {

    const cart = useSelector((state) => state.cart);
    console.log(cart)

    let totalCartPrice = 0;

    let totalCartItems = [];

    const dispatch = useDispatch();
   
    const handleRemoveFromCart = (product) => {
        dispatch(deleteFromCart(product))
        toast.error("Course removed from cart", {
            position: "bottom-left",
          });
    }

  

    return(
        <Box>
        <Navbar/>
        <Divider
        paddingTop={5}
        />
        <Box
        padding={10}
        className="cart-container">
        <Heading>Shopping Cart</Heading>
        {cart.cartItems?.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : ( 
        <VStack
        paddingTop={10}
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        >
            <Grid templateColumns='3fr 1fr 1fr 1fr' gap={10}>
            <GridItem rowSpan={2} bold={2} className="course-title">
            <Text as='b'>Course</Text>
            </GridItem>
            <GridItem rowSpan={2} className="price">
            <Text as='b'>Price</Text>
            </GridItem>
            <GridItem rowSpan={2} className="course-title">
            <Text as='b'>Remove</Text>
            </GridItem>
            </Grid>

                {cart?.map(cartItem => {

                    totalCartPrice += cartItem.price
                    totalCartItems.push(cartItem.id)

                    return (
                        <Grid templateColumns='3fr 1fr 1fr 1fr' gap={10} key={cartItem.id}>
                        <GridItem rowSpan={2} className="course-title">{cartItem.name}</GridItem>
                        <GridItem rowSpan={2} className="price">${cartItem.price}</GridItem>
                        <GridItem rowSpan={2} className="course-title">
                            <Button 
                            colorScheme='teal' variant='ghost'
                            onClick={() => handleRemoveFromCart(cartItem)}>
                                <DeleteIcon/>
                            </Button>
                        </GridItem>
                        </Grid>
                    )
                })}
                    <Box 
                    padding={5}
                    borderWidth='1px' borderRadius='lg' overflow='hidden'
                    maxW='32rem'>
                        <Box>
                        <Heading md={10} size='md'>Total</Heading>
                        <Text 
                        fontSize='xl'
                        paddingTop={2}
                        >
                        ${totalCartPrice}
                        </Text>
                        {/* <Text 
                        fontSize='xl'
                        paddingTop={2}
                        >
                        {totalCartItems}
                        </Text> */}
                        </Box>
                        <Box paddingTop={4}>
                        <Heading 
                        md={10} 
                        size='md'
                        paddingBottom={3}
                        >Pay with</Heading>

                        <Checkout 
                        totalCartPrice={totalCartPrice}
                        // items={totalCartItems}
                        />
                        </Box>
                        </Box>
            </VStack>
       
        )}
        </Box>
        <Footer2/>
        </Box>
    )
}
export default Cart;