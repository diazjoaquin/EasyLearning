// import React from 'react';
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart"
import * as React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Video from "./components/video/video";

function App() {
  return (
    <ChakraProvider>
        <Route exact path="/" component={Home}/>
        <Route exact path="/video" component={Video}/>
        <Route exact path="/cart" component={Cart}/>
    </ChakraProvider>
  );
}

export default App;
