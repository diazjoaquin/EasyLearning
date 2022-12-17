import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import * as React from "react";
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
import Profile from "./components/pages/profile/profile";
import Create from "./components/create/Create";
import ShowMoreCourses from "./components/pages/profile/ShowMoreCourses"

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
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/detailVideo/:id" component={Videos}/>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/formCourse" component={Create} />
        <Route exact path="/cursosCreados" component={ShowMoreCourses} />
      </ChakraProvider>
      </AuthProvider>
  );
}

export default App;
 // element={
        //   <ProtectedRoutes>
        //   <Detail/>
        //   </ProtectedRoutes>
        //   }/>