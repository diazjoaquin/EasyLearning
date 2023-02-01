import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";
import axios from "axios";
import { createStandaloneToast } from "@chakra-ui/toast";

// firebase:
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase-config";

// axios.defaults.baseURL = process.env.REACT_APP_API;
// console.log(process.env.REACT_APP_API);
axios.defaults.baseURL = "http://localhost:3001";

const { ToastContainer, toast } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={"Conecting ..."}>
      <Provider store={store}>
        <BrowserRouter>
          <React.StrictMode>
            <ToastContainer />
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </FirebaseAppProvider>
);

// toast({
//   title: "An error occurred.",
//   description: "Unable to create user account.",
//   status: "error",
//   duration: 9000,
//   isClosable: true,
// });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
