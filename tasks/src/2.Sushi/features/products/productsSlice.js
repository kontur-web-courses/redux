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

export function getProductStatus(state) {
  const {products, chosenProducts} = state;

  if (
    chosenProducts.status === Status.loading ||
    products.status === Status.loading
  ) {
    return Status.loading;
  }

  if (products.status === Status.loaded) {
    return Status.loaded;
  }

  return Status.none;
}

export function getProductIds(state) {
  const {products, chosenProducts} = state;

  if (chosenProducts.status === Status.loaded) {
    return chosenProducts.ids;
  }

  if (products.status === Status.loaded) {
    return products.allIds;
  }

  return [];
}
