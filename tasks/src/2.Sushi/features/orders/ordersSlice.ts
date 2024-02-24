import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {clean, IPurchaseState} from '../purchases/purchasesSlice';
import {Page} from '../../constants/Page';
import {navigateTo} from '../navigation/navigationSlice';
import {createAppAsyncThunk} from '../../app/createAppAsyncThunk';

export type OrdersState = IPurchaseState[];

const initialState: OrdersState[] = [];

export const order = createAppAsyncThunk<void, undefined>('orders/order', (_, thunkAPI) => {
	const {purchases} = thunkAPI.getState();

	thunkAPI.dispatch(navigateTo(Page.orders));
	thunkAPI.dispatch(addPurchasesToOrder(purchases));
	thunkAPI.dispatch(clean());
});

export const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		addPurchasesToOrder(state, action: PayloadAction<IPurchaseState[]>) {
			state.unshift(action.payload);
		},
	},
});

export const {addPurchasesToOrder} = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
