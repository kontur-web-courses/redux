import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Status} from '../../constants/Status';
import {IProduct} from '../../api/products';
import {RootState} from '../../app/store';

export interface IProductsState {
	allIds: number[];
	byId: Record<string, IProduct>;
	status: Status;
}

const initialState: IProductsState = {
	allIds: [],
	byId: {},
	status: Status.none,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		loadProductsRequest(state) {
			return {
				...state,
				status: Status.loading,
			};
		},
		loadProductsSuccess(state, action: PayloadAction<IProduct[]>) {
			const products = action.payload;
			const productsAllIds = products.map((p) => p.id);
			const productsById = products.reduce((result, product) => ({...result, [product.id]: product}), {});

			return {
				...state,
				allIds: productsAllIds,
				byId: productsById,
				status: Status.loaded,
			};
		},
	},
});

export const {loadProductsRequest, loadProductsSuccess} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

export function getProductStatus(state: RootState) {
	const {products, chosenProducts} = state;

	if (chosenProducts.status === Status.loading || products.status === Status.loading) {
		return Status.loading;
	}

	if (products.status === Status.loaded) {
		return Status.loaded;
	}

	return Status.none;
}

export function getProductIds(state: RootState) {
	const {products, chosenProducts} = state;

	if (chosenProducts.status === Status.loaded) {
		return chosenProducts.ids;
	}

	if (products.status === Status.loaded) {
		return products.allIds;
	}

	return [];
}
