import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import{
userReducer
} from "./reducers/userReducer";
import{
newProductReducer,
productDetailsReducer,
productsReducer
} from "./reducers/productReducer"
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
    userdata:userReducer,
    newProduct: newProductReducer,
    cart: cartReducer,
    products: productsReducer,
    productDetails: productDetailsReducer
});

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
  
let initialState = {
  userdata: { user: userInfoFromStorage },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
    }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;