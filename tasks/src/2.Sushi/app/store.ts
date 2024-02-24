import Api from '../api';
import {Page} from '../constants/Page';
import {configureStore, StateFromReducersMapObject} from '@reduxjs/toolkit';
import {productsReducer} from '../features/products/productsSlice';
import {navigateTo, pageReducer} from '../features/navigation/navigationSlice';
import {Middleware} from 'redux';
import logger from 'redux-logger';
import {chosenProductsReducer} from '../features/chosenProducts/chosenProductsSlice';
import {purchasesReducer} from '../features/purchases/purchasesSlice';

export const api = new Api({baseUrl: 'http://sampleserviceurl?foo=bar'});

const reducer = {
	page: pageReducer,
	products: productsReducer,
	chosenProducts: chosenProductsReducer,
	purchases: purchasesReducer,
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
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {api},
			},
		}).concat(customMiddleWare, logger),
});

export type AppDispatch = typeof store.dispatch;
