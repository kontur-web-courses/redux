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
    [actionTypes.CHANGE_PRODUCT_TAG]: changeProductTag,
    [actionTypes.LOAD_BY_TAGS_REQUEST]: loadByTagsRequest,
    [actionTypes.LOAD_BY_TAGS_SUCCESS]: loadByTagsSuccess,
    [actionTypes.LOAD_BY_TAGS_FAILURE]: loadByTagsFailure
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

function loadByTagsRequest(state, action) {
  return {
    ...state,
    status: Status.loading
  };
}

function loadByTagsSuccess(state, { productIds }) {
  return {
    ...state,
    ids: productIds,
    status: Status.loaded
  };
}

function loadByTagsFailure(state, { productIds }) {
  return {
    ...state,
    tags: [],
    ids: [],
    status: Status.none
  };
}

const purchasesReducer = createReducer([], {
  [actionTypes.CHANGE_PURCHASE_QUANTITY]: changePurchaseQuantity
});

function changePurchaseQuantity(state, { productId, value }) {
  return state.some(p => p.id === productId)
    ? state.map(p =>
        p.id === productId ? createPurchase(productId, p.quantity + value) : p
      )
    : [...state, createPurchase(productId, value)];
}

function createPurchase(id, quantity) {
  return {
    id,
    quantity: Math.max(0, quantity)
  };
}

const ordersReducer = createReducer([], {});

const combinedReducer = combineReducers({
  page: pageReducer,
  products: productsReducer,
  chosenProducts: chosenProductsReducer,
  purchases: purchasesReducer,
  orders: ordersReducer
});

const crossSliceReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ORDER: {
      if (state.purchases.length > 0) {
        return {
          ...state,
          page: Page.orders,
          purchases: [],
          orders: [state.purchases, ...state.orders]
        };
      }
      return state;
    }
    default:
      return state;
  }
}

export const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  const finalState = crossSliceReducer(intermediateState, action);
  return finalState;
}
