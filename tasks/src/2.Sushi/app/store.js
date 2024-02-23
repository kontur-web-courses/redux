import {logger} from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import Page from '../constants/Page';
import Status from '../constants/Status';
import products from '../api/products';
import Api from '../api';
import {navigateTo, pageReducer} from "../features/navigation/navigationSlice.js";
import {productsReducer} from '../features/products/productsSlice';

export const api = new Api({ baseUrl: 'http://sampleserviceurl?foo=bar' });

const productsAllIds = products.map(p => p.id);
const productsById = products.reduce(
  (result, product) => ({ ...result, [product.id]: product }),
  {}
);

const preloadedState = {
  page: Page.menu,
  products: {
    allIds: productsAllIds,
    byId: productsById,
    status: Status.loaded
  }
};

const customMiddleWare = ({ getState, dispatch }) => next => action => {
  // console.log(action.type);
  if (action.type === navigateTo.type) {
    if (getState().page === Page.menu) {
      return next({ ...action, page: Page.cart });
    }
  }
  return next(action);
};


export const store = configureStore({
  reducer: {
    page: pageReducer,
    products: productsReducer
  },
  preloadedState,
  middleware: ((getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleWare, logger))
});

