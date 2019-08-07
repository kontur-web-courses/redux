import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Page from '../constants/Page';
import Status from '../constants/Status';
import ProductTag from '../constants/ProductTag';
import * as actionTypes from '../actionTypes';

const pageReducer = createReducer(Page.menu, {
  [actionTypes.NAVIGATE_TO_PAGE]: (state, action) => action.page
});

const productsReducer = createReducer(
  {
    allIds: [],
    byId: {},
    status: Status.none
  },
  {
    [actionTypes.LOAD_PRODUCTS_REQUEST]: loadProductsRequest,
    [actionTypes.LOAD_PRODUCTS_SUCCESS]: loadProductsSuccess
  }
);

function loadProductsRequest(state, action) {
  return {
    ...state,
    status: Status.loading
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
    allIds: productsAllIds,
    byId: productsById,
    status: Status.loaded
  };
}

const chosenProductsReducer = createReducer(
  {
    tags: [],
    ids: [],
    status: Status.none
  },
  {
    [actionTypes.CHANGE_PRODUCT_TAG]: changeProductTag
  }
);

function changeProductTag(state, { productTag }) {
  const tags = state.tags.some(t => t === productTag)
    ? state.tags.filter(t => t !== productTag)
    : [...state.tags, productTag];
  return {
    ...state,
    tags
  };
}

export const rootReducer = combineReducers({
  page: pageReducer,
  products: productsReducer,
  chosenProducts: chosenProductsReducer
});
