import axios from "axios";
import { DELETE_PRODUCTS_FAILURE, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, POST_PRODUCTS_FAILURE, POST_PRODUCTS_REQUEST, POST_PRODUCTS_SUCCESS } from "../constants/ProductsConstant";

// make a action to gets all products
export const getAllProducts = async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });

  try {
    const res = await axios.get(process.env.REACT_APP_API_BASE_URL + "/api/product");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILURE, payload: error });
  }
};

// make a action to create a product
export const createProduct = (payload) => async (dispatch) => {
  dispatch({ type: POST_PRODUCTS_REQUEST });

  try {
    const res = await axios.post(process.env.REACT_APP_API_BASE_URL + "/api/product", {
      productId: payload.productId,
      name: payload.name,
      price: payload.price,
      featured: payload.featured,
      rating: payload.rating,
      company: payload.company
    });
    dispatch({ type: POST_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: POST_PRODUCTS_FAILURE, payload: error });
  }
};

// make a action to delete a product
export const deleteProduct = (payload) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCTS_REQUEST });

  try {
    const res = await axios.delete(process.env.REACT_APP_API_BASE_URL + "/api/product" + payload.productId);
    dispatch({ type: DELETE_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCTS_FAILURE, payload: error });
  }
};
