import axios from "axios";

// Action creators for get product
export const getProductemActionRequest = () => ({
  type: GET_PRODUCT_REQUEST,
});

export const getProductAtionSuccess = (products) => ({
  type: GET_PRODUCT_SUCCESS,
  products,
});

export const getProductActionFailure = () => ({
  type: GET_PRODUCT_FAILURE,
});
// Get product request
export const getAllProductItem = () => {
  return async (dispatch) => {
    try {
      dispatch(getProductemActionRequest());
      const { data } = await axios.get("http://localhost:8000/api/products");
      dispatch(getProductAtionSuccess(data));
    } catch (error) {
      dispatch(getProductActionFailure());
    }
  };
};