import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootRouter from "../reducer";
import thunk from "redux-thunk";

export const store = createStore(rootRouter, composeWithDevTools(applyMiddleware(thunk)));