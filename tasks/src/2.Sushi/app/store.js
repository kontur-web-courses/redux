import {createStore} from 'redux';
import {rootReducer} from '../features';
import Page from '../constants/Page';
import Status from '../constants/Status';
import products from '../api/products';
import Api from '../api';

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


export const store = createStore(rootReducer, preloadedState);

