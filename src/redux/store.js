import { legacy_createStore } from "redux";

import cartItemsReducer from "./reducers/cartItemsReducer";

const store = legacy_createStore(cartItemsReducer);

export default store;