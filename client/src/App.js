import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import * as React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Videos from "./components/Carpeta videos/videos/Videos";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/contaact/Contact";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import Course from "./components/pages/course/Course";
import About from "./components/pages/about/About";
import Detail from "./components/detail/CourseDetail";
import {AuthProvider} from './components/context/Auth-context.js';
import { ProtectedRoutes } from "./components/context/ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/about" component={About} />
        <Route exact path="/detail/:id" 
        component={
          <ProtectedRoutes>
          <Detail/>
          </ProtectedRoutes>
          }/>
        <Route exact path="/detail/:id/videos" component={Videos} />
      </ChakraProvider>
      </AuthProvider>
  );
}

export default App;
