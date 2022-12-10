// import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import * as React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Video from "./components/video/video";

function App() {
  return (
    <ChakraProvider>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/video" component={Video} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
