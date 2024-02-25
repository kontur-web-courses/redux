import Api from '../api';
import products from '../api/products';
import {Page} from '../constants/Page';
import {Status} from '../constants/Status';
import {rootReducer} from '../features';
import {createStore} from 'redux';

export const api = new Api({baseUrl: 'http://sampleserviceurl?foo=bar'});

const productsAllIds = products.map((p) => p.id);
const productsById = products.reduce((result, product) => ({...result, [product.id]: product}), {});

const preloadedState = {
	page: Page.menu,
	products: {
		allIds: productsAllIds,
		byId: productsById,
		status: Status.loaded,
	},
};

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, preloadedState);
export type AppDispatch = typeof store.dispatch;
