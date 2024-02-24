import Api from '../api';
import products, {IProduct} from '../api/products';
import {Page} from '../constants/Page';
import {Status} from '../constants/Status';
import {configureStore, StateFromReducersMapObject} from '@reduxjs/toolkit';
import {productsReducer} from '../features/products/productsSlice';
import {navigateTo, pageReducer} from '../features/navigation/navigationSlice';
import {Middleware} from 'redux';
import logger from 'redux-logger';

export const api = new Api({baseUrl: 'http://sampleserviceurl?foo=bar'});

const reducer = {
	page: pageReducer,
	products: productsReducer,
};

export type RootState = StateFromReducersMapObject<typeof reducer>;

const customMiddleWare: Middleware =
	({getState}) =>
	(next) =>
	(action) => {
		// console.log(action.type);
		if (action.type === navigateTo.type) {
			if (getState().page === Page.menu) {
				next({...action, page: Page.cart});
			}
		}
		next(action);
	};

export const store = configureStore({
	reducer,
	middleware: [customMiddleWare, logger],
});
export type AppDispatch = typeof store.dispatch;
