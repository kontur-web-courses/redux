import {createSlice} from '@reduxjs/toolkit';
import {Status} from '../../constants/Status';
import {IProduct} from '../../api/products';

export type ProductsState = {
	allIds: number[];
	byId: Record<string, IProduct>;
	status: Status;
};

const initialState: ProductsState = {
	allIds: [],
	byId: {},
	status: Status.none,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {}, // (!) без reducers будет ошибка типов
});

export const productsReducer = productsSlice.reducer;
