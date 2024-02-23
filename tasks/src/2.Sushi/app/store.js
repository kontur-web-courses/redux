import {logger} from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import Page from '../constants/Page';
import Api from '../api';
import {navigateTo, pageReducer} from "../features/navigation/navigationSlice.js";
import {productsReducer} from '../features/products/productsSlice';
import {chosenProductsReducer} from '../features/chosenProducts/chosenProductsSlice';
import {purchasesReducer} from '../features/purchases/purchasesSlice';

export const api = new Api({ baseUrl: 'http://sampleserviceurl?foo=bar' });

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
    products: productsReducer,
    chosenProducts: chosenProductsReducer,
    purchases: purchasesReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {api}
      }
    }).concat(customMiddleWare, logger);
  }
});

