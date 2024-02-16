import { combineReducers } from "redux";
import {allProducts, productDetails} from "./productReducers";

const reducer = combineReducers({
  allProducts: allProducts,
  product: productDetails
});

export default reducer;
