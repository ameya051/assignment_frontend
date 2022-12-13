import {
  DELETE_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  POST_PRODUCTS_FAILURE,
  POST_PRODUCTS_REQUEST,
  POST_PRODUCTS_SUCCESS,
} from "../constants/ProductsConstant";

const initialState = {
  // initialState for get all product
  isLoading: false,
  products: [],
  error: null,

  // initialState for create a product
  isLoadingPost: false,
  successPost: null,
  errorPost: null,

  // initialState for delete a product
  isLoadingDelete: false,
  successDelete: null,
  errorDelete: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // all product gets reducers
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        isLoading: false,
        products: action.payload,
        error: null,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        isLoading: false,
        products: [],
        error: action.payload,
      };

    // single product create reducers
    case POST_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoadingPost: true,
      };
    case POST_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoadingPost: false,
        successPost: action.payload,
        errorPost: null,
      };
    case POST_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoadingPost: false,
        successPost: null,
        errorPost: action.payload,
      };

    // single product delete reducers
    case DELETE_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoadingDelete: true,
      };
    case DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoadingDelete: false,
        successDelete: action.payload,
        errorDelete: null,
      };
    case DELETE_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoadingDelete: false,
        successDelete: null,
        errorDelete: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
