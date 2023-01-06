import { Route } from "react-router-dom";
import Home from "./components/home/Home";
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
import Cart from "./components/cartComponent/cart";
import { AuthProvider } from "./components/context/Auth-context.js";
// import { ProtectedRoutes } from "./components/context/ProtectedRoutes";
import Profile from "./components/pages/profile/profile";
import EditCourse from "./components/editcourse/EditCourse";
import Create from "./components/create/Create";
import ShowMoreCourses from "./components/pages/profile/MyCreatedCourses/ShowMoreCourses";
import ShowMoreCourses2 from "./components/pages/profile/myCourses/ShowMoreCourses2";
import Verification from "./components/pages/signup/Verification.jsx";

//Paypal
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ARjP3IEG_UlE_vM5S-HxokNsAdUIkcck3Jr_O3cS3WLaL0sD85BCGoe5-FG2qbOj9DBy0R4RdTdD-BlD",
        }}
      >
        <ToastContainer />
        <ChakraProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/course" component={Course} />
          <Route exact path="/about" component={About} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/detailVideo/:courseId/:id" component={Videos} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editcourse/:courseId" component={EditCourse} />
          <Route exact path="/formCourse" component={Create} />
          <Route exact path="/cursosCreados" component={ShowMoreCourses} />
          <Route exact path="/cursosComprados" component={ShowMoreCourses2} />
          <Route exact path="/verification" component={Verification}/>
        </ChakraProvider>
      </PayPalScriptProvider>
    </AuthProvider>
  );
}

export default App;
