import {createSlice} from "@reduxjs/toolkit";
import Status from "../../constants/Status";

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allIds: [],
    byId: {},
    status: Status.none
  },
  reducers: {
    loadProductsRequest(state) {
      return {
        ...state,
        status: Status.loading
      };
    },
    loadProductsSuccess(state, action) {
      const products = action.payload;
      const productsAllIds = products.map((p) => p.id);
      const productsById = products.reduce(
        (result, product) => ({ ...result, [product.id]: product }),
        {}
      );

      return {
        ...state,
        allIds: productsAllIds,
        byId: productsById,
        status: Status.loaded
      };
    }
  }
});

export const { loadProductsRequest, loadProductsSuccess } =
  productsSlice.actions;

export const productsReducer = productsSlice.reducer;
