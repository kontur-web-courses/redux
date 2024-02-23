import {configureStore} from '@reduxjs/toolkit';
import Page from '../constants/Page';
import Status from '../constants/Status';
import products from '../api/products';
import Api from '../api';
import {pageReducer} from "../features/navigation/navigationSlice.js";
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


export const store = configureStore({
  reducer: {
    page: pageReducer,
    products: productsReducer
  },
  preloadedState
});

