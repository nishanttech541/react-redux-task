import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_FAILURE,
} from "./../redux/actionTypes";

const initialState = {
  isLoading: false,
  isFailed: false,
  data: [],
  successMsg: "",
};

const actionTypes = {
  [GET_PRODUCT_REQUEST]: "fetching",
};

const getSuccessMessage = (type) => `Product ${type} successfully`;

const productItemReducer = (state = initialState, action) => {
  const { type, products } = action;

  if (type in actionTypes) {
    const actionType = actionTypes[type];
    return {
      ...state,
      isLoading: true,
      isFailed: false,
      successMsg: "",
    };
  }

  switch (type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFailed: false,
        data: products,
      };

    case GET_PRODUCT_FAILURE:
      return { ...state, isFailed: true, isLoading: false, successMsg: "" };
    default:
      return state;
  }
};

export default productItemReducer;
