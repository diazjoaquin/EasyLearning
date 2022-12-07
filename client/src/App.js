// import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import * as React from 'react';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider> 
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
