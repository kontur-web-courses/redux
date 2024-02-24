import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Status} from '../../constants/Status';
import {IProduct} from '../../api/products';

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
