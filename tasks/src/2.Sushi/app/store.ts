import Api from '../api';
import products, {IProduct} from '../api/products';
import {Page} from '../constants/Page';
import {Status} from '../constants/Status';
import {configureStore, PreloadedState, StateFromReducersMapObject} from '@reduxjs/toolkit';
import {productsReducer} from '../features/products/productsSlice';
import {pageReducer} from '../features/navigation/navigationSlice';

export const api = new Api({baseUrl: 'http://sampleserviceurl?foo=bar'});

const productsAllIds: number[] = products.map((p) => p.id);
const productsById: Record<string, IProduct> = products.reduce(
	(result, product) => ({...result, [product.id]: product}),
	{}
);

const reducer = {
	page: pageReducer,
	products: productsReducer,
};

const preloadedState: PreloadedState<RootState> = {
	page: Page.menu,
	products: {
		allIds: productsAllIds,
		byId: productsById,
		status: Status.loaded,
	},
};

export type RootState = StateFromReducersMapObject<typeof reducer>;

export const store = configureStore({
	reducer,
	preloadedState,
});
export type AppDispatch = typeof store.dispatch;
