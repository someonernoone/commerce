import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,

  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from "../constants/productConstants";

const allProducts = (state = {}, action) => {
  //console.log(action.type);
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return state ={
        loading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };

    case GET_PRODUCTS_FAIL:
      return state = {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


const productDetails = (state = {}, action) => {
  switch (action.type){
    case PRODUCT_DETAILS_REQUEST:
      return state = {loading: true}

    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload.product
      }

    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export {allProducts, productDetails};
