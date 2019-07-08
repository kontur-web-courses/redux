import Page from '../constants/Page';
import Status from '../constants/Status';
import ProductTag from '../constants/ProductTag';
import * as actionTypes from '../actionTypes';

// defaultState не используется, если в createStore передается preloadedState.
const defaultState = {
  page: Page.menu,
  products: {
    allIds: [],
    byId: {},
    status: Status.none
  }
};

export function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.NAVIGATE_TO_PAGE:
      return {
        ...state,
        page: action.page
      };
    case actionTypes.LOAD_PRODUCTS_REQUEST:
      return loadProductsRequest(state, action);
    case actionTypes.LOAD_PRODUCTS_SUCCESS:
      return loadProductsSuccess(state, action);
  }
  return state;
}

function loadProductsRequest(state, action) {
  return {
    ...state,
    products: {
      ...state.products,
      status: Status.loading
    }
  };
}

function loadProductsSuccess(state, action) {
  const { products } = action;
  const productsAllIds = products.map(p => p.id);
  const productsById = products.reduce(
    (result, product) => ({ ...result, [product.id]: product }),
    {}
  );
  return {
    ...state,
    products: {
      ...state.products,
      allIds: productsAllIds,
      byId: productsById,
      status: Status.loaded
    }
  };
}
