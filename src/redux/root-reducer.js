import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartreducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"]
};

const rootreducer = combineReducers({
  user: userReducer,
  cart: cartreducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootreducer);
